import { Linkedin, Github, Mail } from "lucide-react";

function LeetCodeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.5 3.5L8 10.5C6.2 12.4 6.2 15.3 8 17.2L10.2 19.5C12 21.4 15 21.4 16.8 19.5L21 15.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6L18 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 12H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer({ className }) {
  const links = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/deepanshiruhil1/",
      icon: Linkedin,
    },
    {
      name: "github",
      href: "https://github.com/deepanshiruhil",
      icon: Github,
    },
    {
      name: "email",
      href: "mailto:ruhildeepanshi@gmail.com",
      icon: Mail,
    },
    {
      name: "leetcode",
      href: "https://leetcode.com/u/danshi11/",
      icon: LeetCodeIcon,
    },
  ];

  return (
    <footer
      className={`flex flex-col gap-4 text-sm text-stone-500 dark:text-stone-400 ${className}`}
    >
      <hr className="border-b border-neutral-200 dark:border-neutral-800" />

      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="group flex items-center hover:text-neutral-800 dark:hover:text-neutral-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-5 h-5 hover:scale-110 transition-transform duration-500 ease-out" />

              <span className="hidden md:inline-block md:w-0 md:overflow-hidden md:group-hover:w-auto md:group-hover:ml-2 md:group-hover:opacity-100 md:opacity-0 transition-all duration-500 ease-out">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <p suppressHydrationWarning>
        {new Date().getFullYear()} &copy; Deepanshi Ruhil
      </p>
    </footer>
  );
}