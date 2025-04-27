"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Terminal from "@/components/terminal";
import { Button } from "@/components/ui/button";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <main className="min-h-screen bg-black p-4 md:p-8 font-mono text-green-500">
            <div className="max-w-4xl mx-auto">
                <div className="border border-green-500 rounded-md overflow-hidden">
                    <div className="bg-green-900 px-4 py-2 flex items-center">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="mx-auto text-center text-white">
                            portfolio.sh
                        </div>
                    </div>

                    <div className="p-4 h-[calc(100vh-8rem)] overflow-y-auto">
                        <Terminal />
                    </div>
                </div>

                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://github.com/Lance-Town">
                        <Button
                            variant="outline"
                            className="bg-transparent border-green-500 text-green-500 hover:bg-green-900"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/lance-townsend/">
                        <Button
                            variant="outline"
                            className="bg-transparent border-green-500 text-green-500 hover:bg-green-900"
                        >
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                        </Button>
                    </a>
                </div>
            </div>
        </main>
    );
}
