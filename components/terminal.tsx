"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import ProjectsSection from "./projects-section";
import ExperienceSection from "./experience-section";
import SkillsSection from "./skills-section";
import AboutSection from "./about-section";

type Section =
    | "about"
    | "projects"
    | "experience"
    | "skills"
    | "help"
    | "contact";

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [currentSection, setCurrentSection] = useState<Section | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const commands = {
        help: "Available commands: about, projects, experience, skills, contact, clear",
        about: <AboutSection />,
        projects: <ProjectsSection />,
        experience: <ExperienceSection />,
        skills: <SkillsSection />,
        contact: (
            <div className="mb-4">
                <p className="mb-2">You can reach me at:</p>
                <p>
                    GitHub:{" "}
                    <a
                        href="https://github.com/Lance-Town"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        github.com/Lance-Town
                    </a>
                </p>
                <p>
                    LinkedIn:{" "}
                    <a
                        href="https://www.linkedin.com/in/lance-townsend/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        linkedin.com/in/lance-townsend/
                    </a>
                </p>
            </div>
        ),
        clear: "CLEAR",
    };

    useEffect(() => {
        // Set initial welcome messages 
        setHistory([
            "Welcome to my portfolio terminal!",
            "Type 'help' to see available commands.",
        ]);
    }, []);

    useEffect(() => {
        // Scroll to bottom when history changes
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.trim()) return;

        // Add the command to history immediately
        const newHistory = [...history, `$ ${input}`];
        setHistory(newHistory);

        const command = input.trim().toLowerCase();
        setInput("");

        if (command === "clear") {
            setHistory([]);
            setCurrentSection(null);
            return;
        }

        if (command in commands) {
            setCurrentSection(command as Section);
            if (command === "help") {
                // Add help text in one go
                setHistory((prev) => [...prev, commands.help as string]);
            }
        } else {
            // Add error message in one go
            const errorMsg = `Command not found: ${input}. Type 'help' for available commands.`;
            setHistory((prev) => [...prev, errorMsg]);
        }
    };

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div
            ref={terminalRef}
            className="h-full overflow-y-auto"
            onClick={handleClick}
        >
            {history.map((line, index) => (
                <div key={index} className="mb-1">
                    {line}
                </div>
            ))}

            {currentSection && currentSection !== "help" && (
                <div className="my-4">{commands[currentSection]}</div>
            )}

            <form onSubmit={handleSubmit} className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2" />
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none border-none"
                    autoFocus
                />
            </form>
        </div>
    );
}
