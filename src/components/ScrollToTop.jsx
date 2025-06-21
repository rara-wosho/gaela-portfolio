// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // scrolls to top-left corner
    }, [pathname]);

    return null;
}

export default ScrollToTop;
