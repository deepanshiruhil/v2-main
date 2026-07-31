"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { RotateCcw } from "lucide-react"
import { useState } from "react"

import signatureBlack from "../assets/signature-black.png"
import signatureWhite from "../assets/signature-white.png"

export default function Component() {
  const [key, setKey] = useState(0)

  return (
    <div className="flex flex-col items-end gap-2">
      {/* Light mode — black signature */}
      <motion.div
        key={`black-${key}`}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="block dark:hidden"
      >
        <Image
          src={signatureBlack}
          alt="Deepanshi signature"
          width={285}
          height={70}
          priority
          className="h-auto w-full max-w-xl"
        />
      </motion.div>

      {/* Dark mode — white signature */}
      <motion.div
        key={`white-${key}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden dark:block"
      >
        <Image
          src={signatureWhite}
          alt="Deepanshi signature"
          width={285}
          height={70}
          priority
          className="h-auto w-full max-w-xl"
        />
      </motion.div>

      <motion.button
        onClick={() => setKey((k) => k + 1)}
        aria-label="Replay signature"
        className="text-stone-400 transition-colors hover:text-stone-600 dark:hover:text-stone-300"
      >
        <RotateCcw size={16} />
      </motion.button>
    </div>
  )
}