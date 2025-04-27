"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

interface TerminalPromptProps {
    onCommand: (command: string) => void;
    isProcessing: boolean;
}

export default function TerminalPrompt({
    onCommand,
    isProcessing,
}: TerminalPromptProps) {
    const [input, setInput] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    // Focus the input when the component mounts
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isProcessing) return;

        onCommand(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <ChevronRight className="h-4 w-4 mr-2 text-green-500" />
            <div className="flex-1 relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full bg-transparent outline-none border-none text-green-500"
                    disabled={isProcessing}
                    autoFocus
                />
                {!isProcessing && cursorVisible && input.length === 0 && (
                    <span className="absolute top-0 left-0 h-full w-2 bg-green-500 opacity-70"></span>
                )}
            </div>
        </form>
    );
}
