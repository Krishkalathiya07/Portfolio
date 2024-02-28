"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

export function BackgroundGradientDemo() {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                    src={`/react.svg`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    i am Fullstack Webdeveloper !!
                </p>
                <p>
                    my expertise in React.js : 
                </p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    Proficiency in developing user interfaces using React component-based architecture.
                    Experience with optimizing performance using React virtual DOM and efficient rendering techniques.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                    </span>
                </button>
            </BackgroundGradient>
        </div>
    );
}
