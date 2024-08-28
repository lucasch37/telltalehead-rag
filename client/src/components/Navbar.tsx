import Link from "next/link";
import React from "react";
import { ScrollText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {};

const Navbar = async (props: Props) => {
    return (
        <div className="inset-x-0 top-0 z-0 h-fit py-2">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto container">
                <div className="flex gap-4">
                    <Link
                        href={"/"}
                        className="flex items-center gap-2 playfair_display text-2xl font-medium underline-animate"
                    >
                        The Tell-Tale Heart
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link href={"/chat"} className="underline-animate">
                        Chat
                    </Link>
                    <Link href={"/read"} className="underline-animate">
                        Read
                    </Link>
                    <Link href={"/about"} className="underline-animate">
                        About
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
