import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Home } from "./_components/home";
import { NavbarComponent as Navbar } from "./_components/navbar";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { Socials } from "./_components/socials";
import { Achievements } from "./_components/achievements";

export default function Page() {
    return (
    <>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextUIProvider>
        <div className="max-w-2xl mx-auto overflow-hidden">
          <Navbar />
          <div className="p-4">
            <Home />
            <Projects />
            <Achievements />
            <Skills />
            <Socials className="justify-center" />
          </div>
        </div>
      </NextUIProvider>
    </ThemeProvider>
    </>
  )
}
