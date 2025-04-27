"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
    text: string;
    typingSpeed?: number;
    startDelay?: number;
    onComplete?: () => void;
    className?: string;
}

export default function TypingEffect({
    text,
    typingSpeed = 40,
    startDelay = 0,
    onComplete,
    className = "",
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        // Reset when text changes
        setDisplayedText("");
        setCurrentIndex(0);
        setStarted(false);
    }, [text]);

    useEffect(() => {
        // Initial delay before starting to type
        if (!started) {
            const startTimer = setTimeout(() => {
                setStarted(true);
            }, startDelay);
            return () => clearTimeout(startTimer);
        }

        if (!started || currentIndex >= text.length) return;

        // Random variation in typing speed for more realistic effect
        const speed = typingSpeed + Math.random() * 30 - 15;

        const typingTimer = setTimeout(() => {
            setDisplayedText(text.substring(0, currentIndex + 1));
            setCurrentIndex((prev) => prev + 1);

            // Call onComplete when typing is finished
            if (currentIndex + 1 >= text.length && onComplete) {
                setTimeout(onComplete, 100);
            }
        }, speed);

        return () => clearTimeout(typingTimer);
    }, [currentIndex, text, typingSpeed, started, startDelay, onComplete]);

    return (
        <span className={`${className} terminal-text`}>
            {displayedText}
            {currentIndex < text.length && <span className="cursor">█</span>}
        </span>
    );
}
