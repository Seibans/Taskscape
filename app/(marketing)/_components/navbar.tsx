import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      {/* el md indica que hay un limite cuando el elemento se expande */}
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        {/* Cuando se hace largo los botones se van a la derecha */}
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          {/* TODO:Si vas a usar asChild debes usar un Link */}
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href={"/sign-in"}>Ingresar</Link>
          </Button>
          <Button size={"sm"} asChild>
            <Link href={"/sign-up"}>Prueba Taskscape GRATIS</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
