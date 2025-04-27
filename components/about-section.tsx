export default function AboutSection() {
    const paragraphs = [
        "Hi, I'm Lance, a Computer Science student at the University of Idaho, passionate about software development and problem solving. Alongside my degree, I am earning a certificate in Robotics System Engineering.",
        "I have hands-on experience in web-development, robotics, machine learning, networking, app development, and game development.",
        "I am always eager to learn and take on new challenges, and I thrive in collaborative environments.",
        "I am currently seeking opportunities to apply my skills and contribute to innovative projects. Feel free to reach out if you have any questions or would like to connect!",
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">About Me</h2>

            <div>
                {paragraphs.map((text, index) => (
                <p key={index} className="mb-3">
                    {text}
                </p>
                ))}
            </div>
        </div>
    )
}
