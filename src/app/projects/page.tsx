import Header from "../components/projects/header";
import {Lostronaunt,Django} from "../components/projects/main_section";
import Navbar from "../components/main/navbar";
export default function Projects() {
  return (
<div className="bg-gradient-to-br absolute max-w-full text-white w-screen from-stone-950 to-stone-700 no-scrollbar overflow-x-hidden">

    
<div className="fixed top-0 left-0 px-2 right-0 " >
        <Navbar />
      </div>
        <hr
          className="mt-20"
          style={{ borderColor: "rgba(255, 215, 0, 0.5)" }}
        />




      <div className="mt-10 px-2">
        <Header />
        <hr className="my-10 border-amber-400" />

        <Lostronaunt />
        <Django />
      </div>
    </div>
 
  );
}
