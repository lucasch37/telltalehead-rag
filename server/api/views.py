from rest_framework.response import Response
from rest_framework.views import APIView
from openai import OpenAI
import json
from django.http import StreamingHttpResponse
from dotenv import load_dotenv
import os
from langchain_pinecone import PineconeVectorStore
from langchain_openai import OpenAIEmbeddings
from langchain.prompts import ChatPromptTemplate

load_dotenv()

PROMPT_TEMPLATE = """
Your name is ChatTTH, and you are an expert on the short story "The Tell-Tale Heart" by Edgar Allan Poe. You are answering questions about the story.
If you are asked a question not relating to the Tell-Tale Heart, respond by saying "I'm sorry, but I can only answer questions about the Tell-Tale Heart".
Answer the question based only on the following context:

{context}

---

These are the past messages in the chat:

{history}

When writing your responses, first cite the sentence or sentences you are using as evidence, and make sure to wrap it in quotes.
DO NOT WRAP ANYTHING IN QUOTES THAT IS NOT A DIRECT QUOTE FROM THE TEXT.
DO NOT QUOTE ANYTHING INCORRECTLY IN THE TEXT.
DO NOT INCLUDE EXTRA PUNCTUATION IN YOUR QUOTES THAT ARE NOT INCLUDED IN THE TEXT.
Answer the question based on the above context: {question}
"""

class ChatBotView(APIView):
    def post(self, request):
        query = request.data.get('query', '')
        history = request.data.get('history', '')
        client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
        knowledge = PineconeVectorStore.from_existing_index(
            index_name="telltaleheart",
            embedding=OpenAIEmbeddings(openai_api_key=os.environ["OPENAI_API_KEY"], model='text-embedding-3-small')
        )
        context = knowledge.similarity_search(query)
        
        def event_stream():
            stream = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "system", "content": ChatPromptTemplate.from_template(PROMPT_TEMPLATE).format(context=context, question=query, history=history)}],
                stream=True,
                max_tokens=400,
                temperature=0.0
            )

            for event in stream:
                if event.choices[0].delta.content is not None:
                    yield event.choices[0].delta.content

        return StreamingHttpResponse(event_stream(), content_type='text/event-stream')
