import HomePage from "./pages/HomePage";
import { Routes } from "react-router";
import { Route } from "react-router";

import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";

const App = () => {
    return (
        <div
            className={`main-container min-h-screen pb-8 bg-white dark:bg-neutral-950`}
        >
            <div className="mx-auto max-w-[1150px] main-wrapper px-3 pb-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
                <div className="border-t border-t-neutral-700 pt-5 mt-8 flex justify-center">
                    <p className="text-gray-700 dark:text-gray-300">Footer</p>
                </div>
            </div>
        </div>
    );
};

export default App;
