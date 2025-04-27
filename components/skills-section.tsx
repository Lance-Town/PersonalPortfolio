export default function SkillsSection() {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: [
                "JavaScript",
                "TypeScript",
                "Python",
                "C++",
                "C",
                "C#",
                "HTML/CSS",
                "Swift",
            ],
        },
        {
            category: "Frameworks & Libraries",
            skills: [
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "ROS2",
                "Pandas",
                "PyTorch",
                "OpenCV",
                "NumPy"
            ],
        },
        {
            category: "Databases",
            skills: ["PostgreSQL", "MySQL"],
        },
        {
            category: "Tools & Platforms",
            skills: [
                "Git",
                "Docker",
                "Linux",
                "VS Code",
                "Figma",
            ],
        },
        {
            category: "Soft Skills",
            skills: [
                "Problem Solving",
                "Team Collaboration",
                "Technical Writing",
                "Agile Methodology",
                "Project Management",
            ],
        },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Technical Skills</h2>

            {skillCategories.map((category, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg text-green-300 mb-2">
                        {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 bg-green-900 text-green-100 rounded-md text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
