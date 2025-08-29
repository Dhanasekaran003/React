import React from "react";
import { useState } from "react";
import './ThemeChanger.css'

const ThemeChanger = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
    return (
        <div className={`app ${theme}`} style={{ minHeight: "100vh", display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between" , alignItems: "center", height: "20px", width: "100%", padding: " 1em " }}>
                <h1>{theme === "light" ? "☀️ light theme" : "🌙 dark theme"}</h1>
                {/* <button onClick={toggleTheme}>
                    Switch to {theme === "light" ? "dark" : "light"}
                </button> */}
                <label className="switch">
                    <input type="checkbox" onChange={ toggleTheme } checked={ theme === "dark"} />
                     <span className="slider"></span>
                </label>
            </div>
        </div>
    )

}
export default ThemeChanger;