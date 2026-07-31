import { GeistSans } from "geist/font/sans";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import ThemeProvider from "./components/ThemeProvider";

const CommandPalette = dynamic(() => import("./components/CommandPalette"), {
  ssr: false,
});

export const metadata = {
  title: "Deepanshi Ruhil",
  metadataBase: new URL("https://deepanshiruhilportfolio.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-ZVLSZR04HM" />
      </head>
      <body className={GeistSans.className}>
        <SpeedInsights />
        <ThemeProvider>
          <main className="flex justify-center bg-[#e8dfd0] dark:bg-[#111111] font-extralight min-h-screen selection:bg-[#c9bda8] dark:selection:bg-[#3a342c] bg-[radial-gradient(#cfc5b6_1px,transparent_1px)] dark:bg-[radial-gradient(#2a2723_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="flex flex-col gap-4 w-full md:max-w-[500px] m-6 md:m-20 text-[#29251f] dark:text-[#d8cdbd] md:mt-[60px]">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}