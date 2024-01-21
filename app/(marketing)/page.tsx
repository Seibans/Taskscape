// esto viene de shadcn por defecto al haber escogido el tema por defecto
import { Medal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Image from "next/image";

const headingFont = localFont({
  src: "../../public/fonts/dancingscript.ttf",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mg-4 flex items-center justify-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />N<sup className="lowercase">o</sup>
          &nbsp;1 Gestión de Tareas
        </div>
        <h1 className="text-2xl lg:text-9xl md:text-6xl text-center text-neutral-800 mb-6 flex flex-col items-center justify-center">
          <span className="underline decoration-wavy decoration-fuchsia-500 decorado mb-8">Taskscape</span>
          {/* <Image src={"/flecha.webp"} alt="flecha" width={70} height={70} className="rotate-90"/> */}
          <span className="rotate-90">{"=>"}</span>
          <span className="text-3xl underline decoration-wavy decoration-fuchsia-500 decorado mt-5">Gestiona tus Tareas de manera Interactiva</span>
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          trabaja didácticamente.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
          )}
      >
        Colabora, gestiona proyectos y alcanza nuevos picos de productividad. Desde las alturas a la oficina, la forma en que su equipo trabaja es única - lograrlo todo con Taskscape.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href={"/sign-up"}>Prueba Taskscape GRATIS</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
