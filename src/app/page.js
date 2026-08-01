"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { GalleryHorizontalEnd } from "lucide-react";

const Signature = dynamic(() => import("@/app/components/Signature"), {
  ssr: false,
});

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto font-extralight">
      <ul className="grid gap-1 text-base">

        {/* SDE Intern */}
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400">
            SDE Intern
            <span className="ml-2">
              →
              <Link
                href="https://www.saleostech.com"
                className="font-medium ml-2"
              >
                SaleosTech
              </Link>
              <span>, UK</span>
            </span>
          </span>
        </li>

        {/* Education */}
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400">
            Computer Science &amp; Artificial Intelligence
            <span className="ml-2">
              →
              <Link
                href="https://www.igdtuw.ac.in"
                className="font-medium ml-2"
              >
                IGDTUW
              </Link>
            </span>
          </span>
        </li>

        {/* What I've been building */}
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            what i&apos;ve been building:
          </span>

          <ul className="grid gap-2 pl-4">

            {/* Notation */}
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                created{" "}
                <Link
                  href="https://notationbydeepanshi.vercel.app"
                  className="font-medium"
                >
                  Notation
                </Link>{" "}
                — unreadable handwritten math → efficient LaTeX notes
              </span>
            </li>

            {/* Zomato ETA */}
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                debunking what “
                <Link
                  href="https://github.com/deepanshiruhil/Zomato_ETA"
                  className="font-medium"
                >
                  your order
                </Link>
                ” arriving soon actually means
              </span>
            </li>

            {/* HarborCore */}
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                made berth assignments impossible to {" "}
                <Link
                  href="https://github.com/deepanshiruhil/HarborCore"
                  className="font-medium"
                >
                  double-book
                </Link>
              </span>
            </li>

            {/* Pathfinder */}
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                watching{" "}
                <Link
                  href="https://pathfinderbydeepanshi.vercel.app"
                  className="font-medium"
                >
                  algorithms
                </Link>{" "}
                argue over the best way through a wall
              </span>
            </li>

          </ul>
        </li>

        {/* Currently */}
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            currently:
          </span>

          <ul className="grid gap-1 pl-4">

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                merging pull requests at{" "}
                <Link
                  href="https://msc-site.vercel.app/"
                  className="font-medium"
                >
                  Microsoft Student Chapter, IGDTUW
                </Link>
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                designing at{" "}
                <Link
                  href="https://tedx-igdtuw.vercel.app"
                  className="font-medium"
                >
                  TEDxIGDTU
                </Link>
              </span>
            </li>

          </ul>
        </li>

        {/* Achievements */}
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            somehow, i&apos;ve also:
          </span>

          <ul className="grid gap-1 pl-4">

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                made it to the top 1500 out of 125k+ → Google Big Code
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                won a few comps (7+) → IIT Delhi · IIIT Delhi · DTU
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>

              <span className="text-stone-600 dark:text-stone-400">
                solved 500+ problems →{" "}
                <Link
                  href="https://leetcode.com/u/danshi11/"
                  className="font-medium"
                >
                  LeetCode
                </Link>
              </span>
            </li>

          </ul>
        </li>

      </ul>

      {/* Projects button */}
      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border border-stone-400 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-extralight hover:scale-[1.02] active:scale-[0.98] shadow-sm"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex flex-col sm:flex-row items-center justify-end mt-8">
        <Signature />
      </div>
    </div>
  );
}
