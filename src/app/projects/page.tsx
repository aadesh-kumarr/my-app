import Header from "../components/projects/header";
import { Lostronaunt, Django } from "../components/projects/old-2";
import Ecommerce from "../components/projects/e-commerce";
export default function Projects() {
  return (
    <div className="bg-gradient-to-br absolute max-w-full text-white w-screen from-stone-950 to-stone-700 no-scrollbar overflow-x-hidden">
     
      <hr className="mt-20" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />

      <div className="mt-10 px-2">
        <Header />
        <div className="space-y-5">
        <hr className="my-10 border-amber-400" />
        <Ecommerce />
        <Lostronaunt />
        <Django />
        </div>
      </div>
    </div>
  );
}
