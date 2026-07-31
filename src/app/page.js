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
                SaleOSTech Limited, UK
              </Link>
            </span>
          </span>
        </li>

        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400">
            CSAI Junior
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

        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            what i&apos;ve been doing:
          </span>

          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built{" "}
                <Link
                  href="https://github.com/deepanshiruhil/HarborCore"
                  className="font-medium"
                >
                  HarborCore
                </Link>
                , a concurrent port reconciliation system using pessimistic
                locking, CTEs, and window functions
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built{" "}
                <Link
                  href="https://notationbydeepanshi.vercel.app"
                  className="font-medium"
                >
                  Notation
                </Link>
                , a multimodal PDF-to-LaTeX pipeline using Gemini 2.5 Flash
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built{" "}
                <Link
                  href="https://pathfinderbydeepanshi.vercel.app"
                  className="font-medium"
                >
                  Pathfinder
                </Link>
                , a pathfinding visualizer implementing BFS, DFS, Dijkstra&apos;s,
                and A* in JS + canvas
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                solved{" "}
                <Link
                  href="https://leetcode.com/u/danshi11/"
                  className="font-medium"
                >
                  500+ DSA problems on LeetCode
                </Link>
                , with a 100+ day streak
              </span>
            </li>
          </ul>
        </li>

        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            led:
          </span>

          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Head of Design &amp; Creative Strategy,{" "}
                <Link
                  href="https://tedx-igdtuw.vercel.app"
                  className="font-medium"
                >
                  TEDxIGDTU
                </Link>
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Head of International Press,{" "}
                <Link
                  href="https://www.instagram.com/igdtuwmun_/"
                  className="font-medium"
                >
                  IGDTUWMUN&apos;26
                </Link>
              </span>
            </li>
          </ul>
        </li>

        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />

          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            more:
          </span>

          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Vice-Chancellor Exceptional Achievement Award,{" "}
                <Link
                  href="https://www.igdtuw.ac.in"
                  className="font-medium"
                >
                  IGDTUW
                </Link>
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                1st Place 🏆 Innoquest Constraint Challenge,{" "}
                <Link
                  href="https://iiitd.ac.in"
                  className="font-medium"
                >
                  IIIT Delhi
                </Link>
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Top 3 AI/ML Cohort 🥉{" "}
                <Link
                  href="https://gdg.community.dev/gdg-on-campus-indira-gandhi-delhi-technical-university-for-women-delhi-india/"
                  className="font-medium"
                >
                  Google Developers Group
                </Link>
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                1st Place 🏆 Vision Rendezvous UI/UX,{" "}
                <Link
                  href="https://home.iitd.ac.in"
                  className="font-medium"
                >
                  IIT Delhi
                </Link>
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                3rd Place 🏆 ILUX UI/UX,{" "}
                <Link
                  href="https://www.dtu.ac.in/Web/About/contactus.php"
                  className="font-medium"
                >
                  DTU
                </Link>
              </span>
            </li>

            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Head of Web Development and Design 🖥️, Microsoft Student
                Chapter, IGDTUW
              </span>
            </li>
          </ul>
        </li>
      </ul>

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