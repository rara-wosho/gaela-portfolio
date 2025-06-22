import HomePage from "./pages/HomePage";
import { Routes } from "react-router";
import { Route } from "react-router";

import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className={`main-container pb-8 bg-white dark:bg-neutral-950`}>
                <div className="mx-auto max-w-[1150px] min-h-screen main-wrapper px-3 pb-10">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                </div>
                <div className="flex justify-center mx-auto max-w-[1150px] px-3  pt-8 bg-white dark:bg-neutral-950">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default App;
