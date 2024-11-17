"use client";

import { useEffect, useState } from "react";
import "./theme_switcher.css";

type Theme = "light" | "dark" | "system";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
    localStorage.setItem("theme", newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="theme-switcher">
      <button
        className="theme-cycle-button"
        onClick={toggleMenu}
        aria-label="Toggle theme menu"
      >
        <div className="theme-cycles">
          {["light", "dark", "system"].map((themeOption) => (
            <span
              key={themeOption}
              className={`theme-cycle-icon ${
                theme === themeOption ? "is-active" : ""
              }`}
            >
              <i
                className={`fas fa-lg ${
                  themeOption === "system"
                    ? "fa-desktop"
                    : themeOption === "light"
                    ? "fa-sun"
                    : "fa-moon"
                }`}
                aria-hidden="true"
              ></i>
            </span>
          ))}
        </div>
      </button>

      <div className={`theme-menu ${isMenuOpen ? "is-active" : ""}`}>
        {["light", "dark", "system"].map((themeOption) => (
          <button
            key={themeOption}
            className={`theme-menu-item ${
              themeOption === "light"
                ? "is-sun"
                : themeOption === "dark"
                ? "is-moon"
                : "is-system"
            } ${theme === themeOption ? "is-active" : ""}`}
            onClick={() => handleThemeChange(themeOption as Theme)}
            aria-label={`${
              themeOption.charAt(0).toUpperCase() + themeOption.slice(1)
            } mode`}
          >
            <span className="icon">
              <i
                className={`fas ${
                  themeOption === "system"
                    ? "fa-desktop"
                    : themeOption === "light"
                    ? "fa-sun"
                    : "fa-moon"
                }`}
                aria-hidden="true"
              ></i>
            </span>
            <span>
              {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
