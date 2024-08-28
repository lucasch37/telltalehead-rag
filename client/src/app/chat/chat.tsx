"use client";

import { IconSend } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

type Message = {
    role: string;
    content: string;
};

type Props = {};

const Chat = (props: Props) => {
    const [input, setInput] = React.useState("");
    const [messages, setMessages] = React.useState<Message[]>([
        {
            role: "assistant",
            content: `Hello, I'm ChatTTH. I'm an expert on The Tell-Tale Heart, a short story published in 1843 by Edgar Allan Poe.\n\nFeel free to ask me any questions about the story!`,
        },
    ]);
    const messageRef = React.useRef<string>("");

    const handleSubmit = async (formData: React.FormEvent<HTMLFormElement>) => {
        setInput("");
        setMessages((prevMessages) => [
            ...prevMessages!,
            { role: "user", content: input },
        ]);
        formData.preventDefault();

        setMessages((prev) => [
            ...prev!,
            {
                role: "assistant",
                content: "",
            },
        ]);

        try {
            const response = await fetch("http://127.0.0.1:8000/chat/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: input, history: messages }),
            });

            if (!response.ok) throw new Error("Network response was not ok");

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader!.read();
                if (done) break;

                const text = decoder.decode(value);
                setMessages((prevMessages) => {
                    const newMessages = [...prevMessages];
                    if (
                        newMessages[newMessages.length - 1].content.slice(
                            -text.length
                        ) !== text
                    ) {
                        newMessages[newMessages.length - 1].content += text;
                    }
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error:", error);
            setMessages((prevMessages) => {
                const newMessages = [...prevMessages];
                newMessages[newMessages.length - 1].content =
                    "Sorry, an error occurred. Please try again.";
                return newMessages;
            });
        }
    };

    const router = useRouter();

    const processText = (text: string): React.ReactNode[] => {
        const parts = text.split(/(["].*?["])/);
        return parts.map((part, index) => {
            if (part.match(/^["].*["]$/)) {
                return (
                    <span
                        key={index}
                        onClick={() => {
                            window.open(
                                `http://localhost:3000/read/${part.slice(
                                    1,
                                    -1
                                )}`,
                                "_blank",
                                "noopener,noreferrer"
                            );
                        }}
                        className="[box-decoration-break:clone] bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-800 dark:to-purple-800 rounded px-0.5 py-0.5 cursor-pointer dark:outline outline-2 dark:outline-indigo-400 mx-1 whitespace-pre-wrap"
                    >
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className="flex flex-1 flex-col gap-2 h-full overflow-hidden mt-4">
            <div className="flex flex-col gap-4 flex-1 overflow-y-auto pr-4 mb-4">
                {messages?.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0.0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            duration: 0.6,
                        }}
                        className={`rounded-lg border py-2 px-3 max-w-[800px] w-fit leading-relaxed whitespace-pre-wrap ${
                            msg.role === "user"
                                ? "self-end dark:bg-blue-950 dark:border-blue-700 bg-blue-50 border-blue-200"
                                : "dark:bg-zinc-900 dark:border-zinc-700"
                        }`}
                    >
                        {msg.content !== "" ? (
                            processText(msg.content)
                        ) : (
                            <LoaderCircle size={32} className="animate-spin" />
                        )}
                    </motion.div>
                ))}
            </div>
            <form
                className="flex relative justify-center mb-4 mx-1"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Enter your message here"
                    className="rounded-lg w-full pl-5 py-4 outline-blue-100 dark:bg-zinc-900 bg-neutral-100 border pr-36 resize-none overflow-hidden h-auto"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="absolute top-1/2 -right-1 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg text-white p-2 hover:bg-neutral-600 disabled:bg-neutral-500 transition ease-in-out duration-300"
                >
                    <IconSend size={20} />
                </button>
            </form>
        </div>
    );
};

export default Chat;
