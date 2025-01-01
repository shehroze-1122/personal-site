"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import IconButton from "@/components/common/IconButton/IconButton";

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
    toggle(nextTheme as ThemeOptions, true);
  };

  const toggle = useCallback((inputTheme: ThemeOptions, manual: boolean) => {
    setTheme(inputTheme);
    if (manual) {
      localStorage.setItem("theme", inputTheme);
    }
    window.document.documentElement.classList.toggle(
      "dark",
      inputTheme === "dark"
    );
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && isThemeOption(savedTheme)) {
      toggle(savedTheme, true);
      return;
    }

    const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = prefersDarkQuery.matches;

    toggle(prefersDark ? "dark" : "light", false);

    const handleEvent = (ev: MediaQueryListEvent) => {
      // shouldn't change the theme based on system settings when user has explicitly changed the theme
      const selection = localStorage.getItem("theme");
      if (!selection || !isThemeOption(selection)) {
        toggle(ev.matches ? "dark" : "light", false);
      }
    };

    prefersDarkQuery.addEventListener("change", handleEvent);

    return () => prefersDarkQuery.removeEventListener("change", handleEvent);
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
