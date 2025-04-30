import { useState } from "react";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <header className="flex justify-between items-center p-6">
                    <h1 className="text-2xl font-bold">My Portfolio</h1>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded"
                    >
                        {darkMode ? "light" : "dark"}
                    </button>
                </header>

                {/* Hero Section */}
                <section className="text-center py-20 px-4">
                    <h2 className="text-4xl font-extrabold mb-4">
                        Hi, I'm{" "}
                        <span className="text-purple-800 dark:text-purple-500">
                            John
                        </span>{" "}
                        Doe
                    </h2>
                    <p className="text-lg border-l-4 border-blue-800 dark:border-blue-500 inline-flex ps-4">
                        A passionate Web Developer creating modern and
                        responsive web applications.
                    </p>
                </section>

                {/* Experiences */}
                <section className="px-6 py-10 bg-slate-50 dark:bg-purple-950/20">
                    <h3 className="text-2xl font-bold mb-4">Experience</h3>
                    <ul className="space-y-4">
                        <li>
                            <strong>Front-End Developer</strong> at ABC Corp
                            (2023 - Present)
                            <p>
                                Working on React and Tailwind CSS to build UI
                                components.
                            </p>
                        </li>
                        <li>
                            <strong>Intern Developer</strong> at XYZ Solutions
                            (2022)
                            <p>
                                Assisted in creating web tools using JavaScript
                                and PHP.
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Schools Attended */}
                <section className="px-6 py-10 ">
                    <h3 className="text-2xl font-bold mb-4">Education</h3>
                    <ul className="space-y-4">
                        <li>
                            <strong>BS Information Technology</strong> - Example
                            University (2021 - 2025)
                        </li>
                        <li>
                            <strong>High School Diploma</strong> - Sample High
                            School (2015 - 2021)
                        </li>
                    </ul>
                </section>

                {/* Projects */}
                <section className="px-6 py-10 bg-purple-100 dark:bg-purple-950">
                    <h3 className="text-2xl font-bold mb-4">Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 border rounded-lg dark:border-gray-700">
                            <h4 className="font-semibold text-lg">
                                Student Management System
                            </h4>
                            <p>
                                A web app for managing student records using
                                React and Firebase.
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg dark:border-gray-700">
                            <h4 className="font-semibold text-lg">
                                IoT Smart Home
                            </h4>
                            <p>
                                Arduino-based system for controlling lights and
                                appliances remotely.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="px-6 py-10">
                    <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
                    <form className="space-y-4 max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                        />
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Send
                        </button>
                    </form>
                </section>

                <footer className="text-center py-6 border-t dark:border-gray-700">
                    <p>&copy; 2025 John Doe. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
