"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import IconButton from "../../common/IconButton/IconButton";

type ThemeOptions = "dark" | "light";
const themeOptions = ["dark", "light"];
const iconsMap = {
  dark: Moon,
  light: Sun,
};

function isThemeOption(value: string): value is ThemeOptions {
  return themeOptions.includes(value);
}

function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeOptions>("dark");
  const [isMounted, setIsMounted] = useState(false);

  const onToggle = () => {
    const nextTheme =
      themeOptions[(themeOptions.indexOf(theme) + 1) % themeOptions.length];
    toggle(nextTheme as ThemeOptions);
  };

  const toggle = useCallback((inputTheme: ThemeOptions) => {
    setTheme(inputTheme);
    localStorage.setItem("theme", inputTheme);
    window.document.documentElement.classList.toggle(
      "dark",
      inputTheme === "dark"
    );
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && isThemeOption(savedTheme)) {
      toggle(savedTheme);
      return;
    }

    const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = prefersDarkQuery.matches;

    toggle(prefersDark ? "dark" : "light");

    const handleEvent = (ev: MediaQueryListEvent) => {
      toggle(ev.matches ? "dark" : "light");
    };

    prefersDarkQuery.addEventListener("change", handleEvent);

    return prefersDarkQuery.removeEventListener("change", handleEvent);
  }, [toggle]);

  if (!isMounted) return null;

  const Icon = iconsMap[theme];

  return (
    <IconButton aria-label="switch theme" onClick={onToggle}>
      {<Icon height={22} width={22} />}
    </IconButton>
  );
}

export default ThemeToggle;
