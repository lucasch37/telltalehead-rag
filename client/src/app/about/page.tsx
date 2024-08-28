import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Page() {
    const data = [
        {
            title: "1843",
            content: (
                <div>
                    <p className="text-lg font-light mb-8">
                        The Tell-Tale Heart is first published in the January
                        1841 issue of the literary magazine The Pioneer, edited
                        by James Russell Lowell. This magazine was known for
                        featuring works by emerging American authors, and Poe’s
                        story appeared alongside other notable literary pieces
                        of the time.
                    </p>
                    <div className="">
                        <Image
                            src="/timeline/the_pioneer.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p className="text-lg font-light text-center mt-2 italic">
                        The Pioneer, Vol. I, 1843
                    </p>
                </div>
            ),
        },
        {
            title: "1844",
            content: (
                <div>
                    <p className="text-lg font-light mb-8">
                        Poe's The Tell-Tale Heart gains further recognition and
                        is included in several collections of his works. It
                        appears in The Godey's Lady Book (a literary annual
                        edited by Mrs. Sarah Josepha Hale) the most widely
                        circulated pre-Civil War magazine.
                    </p>
                    <div className="">
                        <Image
                            src="/timeline/godeys_lady_book.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p className="text-lg font-light text-center mt-2 italic">
                        Godey's Lady Book, 1867
                    </p>
                </div>
            ),
        },
        {
            title: "1845",
            content: (
                <div>
                    <p className="text-lg font-light mb-8">
                        Poe’s reputation continues to grow. His famous poem,
                        "The Raven," is published in the New York Evening
                        Mirror, leading to increased public and critical
                        attention. Poe's growing fame helps bring more attention
                        to his earlier works, including The Tell-Tale Heart.
                    </p>
                    <div className="">
                        <Image
                            src="/timeline/the_raven.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p className="text-lg font-light text-center mt-2 italic">
                        Illustration of "The Raven" by Edouard Manet, 1875
                    </p>
                </div>
            ),
        },
        {
            title: "1849",
            content: (
                <div>
                    <p className="text-lg font-light mb-8">
                        Edgar Allan Poe dies on October 7, 1849. After his
                        death, The Tell-Tale Heart continues to be celebrated as
                        one of his most important and influential short stories.
                    </p>
                    <div className="">
                        <Image
                            src="/timeline/edgar_allan_poe_grave.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <p className="text-lg font-light text-center mt-2 italic">
                        The Grave of Edgar Allan Poe
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
