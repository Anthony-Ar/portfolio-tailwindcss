import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(
        localStorage.getItem("AA_THEME") !== null
            ? localStorage.getItem("AA_THEME")
            : "dark",
    );
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);

        if (typeof window !== "undefined") {
            localStorage.setItem("AA_THEME", theme);
        }
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
