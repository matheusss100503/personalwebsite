import Nav from "./components/Nav";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import HomePage from "./sections/HomePage";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <header id="NavBar" className="sticky top-0 z-50">
        <Nav />
      </header>
      <section id="HomePage" className="flex justify-center">
        <HomePage />
      </section>
      <section id="About" className="flex justify-center bg-weak">
        <About />
      </section>
      <section id="Projects" className="flex justify-center">
        <Projects />
      </section>
      <section
        id="Contacts"
        className="flex justify-center bg-weak h-[calc(100vh-80px)]"
      >
        <Contacts />
      </section>
    </div>
  );
}
