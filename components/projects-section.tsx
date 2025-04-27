import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "Trade4 - Anonymous Bartering Mobile and Web App",
        description:
            "A mobile and web application that allows users to barter goods and services anonymously, facilitating a unique trading experience.",
        technologies: ['React Native', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
        github: "https://github.com/Lance-Town/BarterApp",
    },
    {
        id: 2,
        title: "bC - Programming Language and Compiler",
        description:
            "Developed a simplified C-like programming language with a custom compiler, enabling users to write and execute code targeting the Tiny Machine.",
        technologies: ["C++", "Flex", "Bison"],
        github: "https://github.com/Lance-Town/bC-Compiler",
    },
    {
        id: 3,
        title: "Clearing Dice - Computer Vision Automation Project",
        description:
            "Designed a computer vision project to automate clearing dice from a table using two Fanuc CRX-10 Robot Arms.",
        technologies: ["Python", "OpenCV", "MQTT"],
        github: "https://github.com/Lance-Town/Robotics-Clearing-Dice"
    },
    {
        id: 4,
        title: "Library Club - Unity Game",
        description:
            "A 2D game developed in Unity, where I served as the Software Architect for a team of 7, leading the design and implementation of the MVP and minigame mechanics.",
        technologies: ["C#", "Unity"],
        github: "https://github.com/Pandawaflez/Penguine---Doki-Doki-Library-Club",
    },
];

export default function ProjectsSection() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Projects</h2>

            {projects.map((project) => (
                <div
                    key={project.id}
                    className="border border-green-500 p-4 rounded-md mb-4"
                >
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="my-2">{project.description}</p>

                    <div className="mb-3">
                        <span className="text-sm text-green-300">
                            Technologies:{" "}
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 bg-green-900 text-green-100 text-xs rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex space-x-3 mt-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-transparent border-green-500 text-green-500 hover:bg-green-900"
                            asChild
                        >
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                Code
                            </a>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
