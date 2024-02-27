"use client";
import React from "react";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "./ui/glowing-stars";


export function WorkExperince() {
    return (
        <div className="flex py-20 items-center justify-center antialiased">
            <GlowingStarsBackgroundCard className="max-h-none">
                <GlowingStarsTitle>Aavakar Solutions(Fullstack Intern) </GlowingStarsTitle>
                <GlowingStarsDescription>
                    Created company in-house website using react js in which i implemented UI and add some cool new fetures , also optimize previous code
                </GlowingStarsDescription>
                <div className="flex justify-between items-end">
                    <GlowingStarsDescription>
                        SEP , 2023 - JANUARY 2024
                    </GlowingStarsDescription>

                </div>
            </GlowingStarsBackgroundCard>
        </div>
    );
}

const Icon = () => {
    return (
        <svg
            xmlns="aavakar.com"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-white stroke-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
        </svg>
    );
};
