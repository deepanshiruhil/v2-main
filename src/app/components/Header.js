"use client";

import HorizontalNav from "./HorizontalNav";
import { usePathname } from "next/navigation";
import Link from "./Link";
import { useEffect, useMemo, useState } from "react";
import useModifierKey from "../hooks/useModifierKey";
import useMobileDevice from "../hooks/useMobileDevice";
import CurvedArrow from "./CurvedArrow";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function Header({ className }) {
  const pathname = usePathname();
  const [isMac, setIsMac] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const isModifierPressed = useModifierKey();
  const isMobileDevice = useMobileDevice();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes('mac'));
    const hasOpenedPalette = localStorage.getItem('hasOpenedCommandPalette');
    setShowArrow(!hasOpenedPalette);

    // Listen for command palette opened event
    const handlePaletteOpened = () => setShowArrow(false);
    window.addEventListener('command-palette-opened', handlePaletteOpened);
    return () => window.removeEventListener('command-palette-opened', handlePaletteOpened);
  }, []);

  const openCommandPalette = () => {
    setShowArrow(false);
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  const links = useMemo(() => [
    {
      name: "about",
      href: "/",
      isActive: pathname === "/",
      isNextLink: true,
    },
    {
      name: "projects",
      href: "/projects",
      isActive: pathname === "/projects",
      isNextLink: true,
    },
    {
      name: "writing",
      href: "/writing",
      isActive: pathname.startsWith("/writing"),
      isNextLink: true,
    },
  ], [pathname]);

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[#171411] dark:text-[#e8dfd0] font-semibold">
        <Link href="/" isNextLink={true}>deepanshi ruhil</Link>
      </h1>
      <div className="flex items-center gap-6">
        <HorizontalNav links={links} />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-[#5c5145] dark:text-[#cfc2b0] hover:bg-[#d9cfbf] dark:hover:bg-[#24211d] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        {!isMobileDevice && (
          <div className="relative">
            {showArrow && <CurvedArrow className="hidden lg:block absolute -top-10 -right-28" />}
            <button
              onClick={openCommandPalette}
              className="hidden sm:flex items-center gap-1 text-xs text-[#5c5145] dark:text-[#cfc2b0] bg-[#f0e9de] dark:bg-[#1c1a17] px-2 py-1 rounded-lg border border-[#d4c9b8] dark:border-[#39342e] hover:bg-[#e6ddcf] dark:hover:bg-[#26221e] hover:border-[#c4b7a4] dark:hover:border-[#4a433a] transition-colors duration-200"
            >
              <span className={`flex items-center ${isModifierPressed ? 'opacity-0' : 'opacity-100'}`}>
                <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-700 font-mono">
                  {isMac ? '⌘' : 'ctrl'}
                </kbd>
                <span>+</span>
              </span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#e4dacb] dark:bg-[#29251f] font-mono">
                K
              </kbd>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
