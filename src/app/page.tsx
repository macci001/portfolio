import { NextUIProvider } from "@nextui-org/react";
import { ContactMe } from "./_components/contact-me";
import { Home } from "./_components/home";
import { NavbarComponent as Navbar } from "./_components/navbar";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { Socials } from "./_components/socials";

export default function Page() {
    return (<NextUIProvider>
      <div className="max-w-2xl mx-auto overflow-hidden">
        <Navbar />
        <div className="p-4">
          <Home />
          <Projects />
          <Skills />
          <Socials className="justify-center" />
        </div>
      </div>
    </NextUIProvider>)
}
