"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconSun, IconMoon } from "@tabler/icons-react"; // Icons for light/dark mode

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true); // Initially visible
  const [lastScrollPos, setLastScrollPos] = useState(0); // Keep track of the last scroll position
  const [theme, setTheme] = useState("light"); // Default theme is light

  // Handle scroll direction and visibility
  useMotionValueEvent(scrollY, "change", (latestScrollPos) => {
    // Scroll position at the top (position 0), navbar should be visible
    if (latestScrollPos === 0) {
      setVisible(true);
      return;
    }

    // Determine if the user is scrolling down or up
    if (latestScrollPos > lastScrollPos) {
      // Scrolling down, hide the navbar
      setVisible(false);
    } else {
      // Scrolling up, show the navbar
      setVisible(true);
    }

    // Update the last scroll position
    setLastScrollPos(latestScrollPos);
  });

  // Handle theme change and persist in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme); // Save theme in localStorage
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-4  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}

        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-900"
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? <IconMoon size={18} /> : <IconSun size={18} />}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
