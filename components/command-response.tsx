"use client";

import type React from "react";

import { useState, useEffect } from "react";
import TypingEffect from "./typing-effect";

interface CommandResponseProps {
    command: string;
    response: string | React.ReactNode;
    onComplete?: () => void;
}

export default function CommandResponse({
    command,
    response,
    onComplete,
}: CommandResponseProps) {
    const [showResponse, setShowResponse] = useState(false);

    // Show the response after the command is typed
    const handleCommandTyped = () => {
        setShowResponse(true);
    };

    // If the response is a string, we'll type it out
    // If it's a React component, we'll just display it after a delay
    useEffect(() => {
        if (showResponse && typeof response !== "string" && onComplete) {
            const timer = setTimeout(onComplete, 500);
            return () => clearTimeout(timer);
        }
    }, [showResponse, response, onComplete]);

    return (
        <div className="mb-2">
            <div className="flex">
                <span className="text-green-400 mr-2">$</span>
                <TypingEffect
                    text={command}
                    typingSpeed={50}
                    onComplete={handleCommandTyped}
                />
            </div>

            {showResponse && (
                <div className="mt-1 ml-4">
                    {typeof response === "string" ? (
                        <TypingEffect
                            text={response}
                            typingSpeed={30}
                            startDelay={300}
                            onComplete={onComplete}
                        />
                    ) : (
                        response
                    )}
                </div>
            )}
        </div>
    );
}
