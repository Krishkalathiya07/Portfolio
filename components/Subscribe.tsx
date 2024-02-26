"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Subscribe() {
    const words = [
        {
            text: "Subscribe",
        },
        {
            text: "to",
        },
        {
            text: "my",
        },
        {
            text: "newsletter",
        },
        {
            text: "Now !!.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <TypewriterEffectSmooth words={words} />
            <p className="md:text-4xl text-3xl lg:text-2xl font-bold text-white relative z-20 text-start">
                Unlock the benefits of subscribing to our newsletter! Stay informed with exclusive updates, special offers, and exciting news. Be the first to know about our latest features and promotions. Join now and experience the advantages of being part of our <span className="text-blue-500 dark:text-blue-500">community.</span>
            </p>
            <div className="flex w-full items-center space-x-2 md:w-1/3 border-x-2 border-y-2" style={{ marginTop: "70px"}}>
                <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="krishatwork@gmail.com"
                ></input>
                <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
}
