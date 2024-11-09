import Header from "../components/projects/header";
import { Lostronaunt, Django } from "../components/projects/old-2";
import Ecommerce from "../components/projects/e-commerce";
export default function Projects() {
  return (
    <div className="bg-gradient-to-br max-w-full text-white w-screen from-stone-950 to-stone-700 no-scrollbar overflow-x-hidden">
     
      <hr className="mt-20" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />

      <div className="mt-10 px-10">
        <Header />
        <div className="space-y-5">
        <hr className="my-10 border-amber-400" />
        <Ecommerce />
        <Lostronaunt />
        <Django />
        <div className=" bg-black/20 text-center text-3xl p-5 text-amber-400 m-5 rounded">And many more to come</div>
        </div>
      <hr className="mt-20" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />
      </div>
    </div>
  );
}
