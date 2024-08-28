import React from "react";
import Chat from "./chat";
import { IconMessage } from "@tabler/icons-react";

type Props = {};

const Page = (props: Props) => {
    return (
        <div className="flex-grow flex flex-col overflow-y-hidden container mt-2">
            <div className="text-6xl font-bold playfair_display flex items-center gap-4">
                Chat
            </div>
            <div className="font-light text-sm mt-2 text-gray-500 border-b pb-4">
                Ask any question to learn more about the Tell-Tale Heart.
            </div>
            <Chat />
        </div>
    );
};

export default Page;
