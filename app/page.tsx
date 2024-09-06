"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";

  const navItems = [
    {
      name: "Home",
      link: "#hero",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

export default function Home() {
  return (
    <div className="container" style={{ height: "500vh" }}>
      <FloatingNav navItems={navItems} />
      <div className="content-container w-full h-screen flex justify-center items-center" id="hero">
        <div className="hero text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">Hello, I'm
            {" "} 
            <span 
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
                Kufavmpu
            </span>
          </h1>
          <p className="mb-5" style={{ marginTop: "1rem", maxWidth: "500px" }}>I want to have connection with someone. I want to be needed by someone. I want the confidence to feel like it's okay to live.</p>
          <HoverBorderGradient as={"button"}>
            <div className="flex items-center space-x-2">
              <p onClick={() => window.open("https://www.instagram.com/kufavmpu/")}>
                Get connected with{" "}
                <LinkPreview 
                  url="https://www.instagram.com/kufavmpu/" 
                  isStatic 
                  imageSrc="https://encrypted-tbn0.gstatic.com/image?q=tbn:ANd9GcQu4CjXQ9TItlKUCAwigG4jMmEjIZAwUTlpkA&s" 
                  className="text-white"
                >
                  Kufavmpu
                </LinkPreview>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </HoverBorderGradient>
        </div>
        <BackgroundBeams />
      </div>
      <div className="fun-fact flex justify-center" id="about">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-xl px-4 md:text-4xl lg:text-5xl font-bold    text-neutral-800 dark:text-white max-w-4xl leading-relaxed    lg:leading-snug text-center mx-auto"
          >
            <Highlight>
              Kufvampu's 
            </Highlight>
             {" "}fun fact
          </motion.h1>
        </HeroHighlight>
      </div>
    </div>
  );
}
