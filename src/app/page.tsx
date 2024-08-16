import { ContactMe } from "./_components/contact-me";
import { Home } from "./_components/home";
import { Navbar } from "./_components/navbar";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";

export default function Page() {
    return (<div className="h-[100vh] w-[100vw] overflow-hidden overflow-y-scroll no-scrollbar">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <ContactMe />
    </div>)
}
