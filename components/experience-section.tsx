export default function ExperienceSection() {
    const experiences = [
        {
            id: 1,
            role: "Robotics Research Assistant",
            company: "Univerity of Idaho",
            period: "June 2024 - August 2024",
            description: [
                "Diagnosed and repaired functionality issues with four robotic arms",
                "Gained hands-on experience with robotic arm setup, calibration, and maintenance, enhancing reliability and performance",
                "Collaborated with robotics department staff to troubleshoot issues",
                "Documented repair processes and setup instructions to streamline future maintenance and development",
                "Developed problem-solving skills by addressing both hardware and software issues",
            ],
        },
        {
            id: 2,
            role: "Resident Assistant",
            company: "University of Idaho",
            period: "January 2023 - May 2023",
            description: [
                "Created and facilitated engaging programming to promote community building and social connections among 63 residents",
                "My leadership and dedication to fostering a positive living experience for residents earned me the recognition of \"Resident Assistant of the Year.\"",
            ],
        },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>

            {experiences.map((exp) => (
                <div
                    key={exp.id}
                    className="border border-green-500 p-4 rounded-md mb-4"
                >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <h3 className="text-lg font-bold">{exp.role}</h3>
                        <span className="text-green-300">{exp.period}</span>
                    </div>

                    <p className="text-green-400 mt-1">{exp.company}</p>

                    <ul className="list-disc pl-5 mt-3 space-y-1">
                        {exp.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
