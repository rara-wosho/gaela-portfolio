import { useState } from "react";

function App() {
    const [dark, setDark] = useState(false);
    return (
        <>
            <div
                className={`${
                    dark && "dark"
                } p-40 bg-white shadow-2xl dark:bg-slate-800`}
            >
                <p className="text-green-600 dark:text-red-600 text-4xl">
                    HELLO WORLD
                </p>

                <button className="" onClick={() => setDark(!dark)}>
                    toggle
                </button>
            </div>
        </>
    );
}

export default App;
