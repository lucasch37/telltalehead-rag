"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <BackgroundBeamsWithCollision>
            <div className="container">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-between items-center gap-6 scale-125">
                        <div className="playfair_display font-semibold">
                            <div className="text-6xl">The</div>
                            <div className="text-7xl">Tell-Tale</div>
                            <div className="text-8xl">Heart</div>
                        </div>
                        <div>
                            <Image
                                src={"/heart.png"}
                                width={175}
                                height={175}
                                alt="heart"
                            />
                        </div>
                    </div>
                    <motion.div
                        className="flex justify-center mt-16 text-xl font-extralight"
                        initial={{ opacity: 0.0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                    >
                        A short story written by Edgar Allan Poe
                    </motion.div>
                    <motion.div
                        className="flex justify-center gap-12 mt-12"
                        initial={{ opacity: 0.0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <Button
                            className="flex gap-1 text-base font-light px-6 py-5 group/button"
                            variant={"outline"}
                            onClick={() => router.push("/chat")}
                        >
                            Chat{" "}
                            <ArrowRight
                                size={20}
                                className="group-hover/button:translate-x-1 transition duration-150"
                            />
                        </Button>
                        <Button
                            className="flex gap-1 text-base font-light px-6 py-5 group/button"
                            variant={"outline"}
                            onClick={() => router.push("/read")}
                        >
                            Read{" "}
                            <ArrowRight
                                size={20}
                                className="group-hover/button:translate-x-1 transition duration-150"
                            />
                        </Button>
                        <Button
                            className="flex gap-1 text-base font-light px-6 py-5 group/button"
                            variant={"outline"}
                            onClick={() => router.push("/about")}
                        >
                            About{" "}
                            <ArrowRight
                                size={20}
                                className="group-hover/button:translate-x-1 transition duration-150"
                            />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}
