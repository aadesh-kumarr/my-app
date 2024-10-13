import Navbar from "./components/main/navbar";
import TypingAnimation from "./components/main/typing";
import Portrait from "./components/main/portrait";
import SideBar from "./components/main/sidebar";
import Resume from "./components/main/resume";
import About from "./components/main/about";
import Internship from "./components/internships/internships";
export default function Home() {
  return (
    <div className="bg-gradient-to-br absolute 
    max-w-full from-stone-950 to-stone-900 no-scrollbar overflow-x-hidden">
     <div className="fixed top-0 left-0 px-2 right-0 " >
      <SideBar />
      <Resume/>
      <Navbar />
      
      </div>
      <hr className="mt-14" style={{ borderColor: 'rgba(255, 215, 0, 0.5)' }} />

      <TypingAnimation />
      <Portrait />
      <About />
      <Internship />
    </div>
  );
}
