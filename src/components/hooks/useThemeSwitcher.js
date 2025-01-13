import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState(undefined); // Estado inicial indefinido

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userPref = window.localStorage.getItem("theme");
            const mediaQuery = window.matchMedia(preferDarkQuery);
            const systemTheme = mediaQuery.matches ? "dark" : "light";

            const initialTheme = userPref || systemTheme;
            setMode(initialTheme);

            const handleChange = () => {
                if (!userPref) {
                    const newSystemTheme = mediaQuery.matches ? "dark" : "light";
                    setMode(newSystemTheme);
                }
            };

            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    useEffect(() => {
        if (mode) {
            if (mode === "dark") {
                document.documentElement.classList.add("dark");
                window.localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                window.localStorage.setItem("theme", "light");
            }
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
