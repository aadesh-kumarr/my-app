import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
export default function Resume() {
  return (
    <div className="absolute  right-0 top-60">
      <Sheet>
        <SheetTrigger className="text-slate-900 text-sm p-1 rounded-full bg-amber-100">
          <span className="flex-col text-sm"><p className="font-serif text-2xl">R</p>
          <p >E</p>
          <p>S</p>
          <p>U</p>
          <p>M</p>
          <p>E</p></span>
        </SheetTrigger>
        <SheetContent className="bg-gradient-to-t from-neutral-900 to-neutral-500">
          <SheetHeader>
            <SheetTitle>RESUME</SheetTitle>
            <SheetDescription >
            <Image
        src="/AADESH.png"
        alt="Portrait of Aadesh Kumar"
        width={500}
        height={200}
        className="mx-auto rounded border border-slate-600 shadow-2xl shadow-slate-700"
      />
 
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
