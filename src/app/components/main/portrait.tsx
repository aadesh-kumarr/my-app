import styles from"./styles.module.css"
import {Cover} from "@/components/ui/cover"
export default function Portrait() {
  return (
    <div className="mt-10 text-slate-100 z-50 ">
      <div className={styles["img_shadow"]}>
   <div className={styles["home_img"] }>
   </div>
   </div>
   <h1 className="text-4xl md:text-4xl bg-black text-white lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent ">
  <Cover>AADESH KUMAR</Cover>
      </h1>

    </div>
  );
}
