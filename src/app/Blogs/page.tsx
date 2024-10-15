import Navbar from "../components/main/navbar";
import Switch from "../components/blogs/switch";
export default function Blog() {
  return (
    <div className="bg-gradient-to-br max-w-full absolute text-white w-screen from-stone-950 to-stone-900 no-scrollbar overflow-x-hidden">
      <div className="fixed top-0 left-0 px-2 right-0 ">
        <Navbar />
      </div>
      <hr className="mt-16" style={{ borderColor: "rgba(255, 215, 0, 0.5)" }} />
      <Switch />
    </div>
  );
}
