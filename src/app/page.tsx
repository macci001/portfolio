import { Home } from "./_components/home";
import { Navbar } from "./_components/navbar";

export default function Page() {
    return (<div className="h-[100vh] w-[100vw] overflow-hidden overflow-y-scroll no-scrollbar">
      <Navbar />
      <Home />
    </div>)
}
