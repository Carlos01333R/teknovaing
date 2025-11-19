import { Menu } from "lucide-react";
import NavigationMenuDesktop from "./Menu";
import NavigationMenuServicios from "./MenuServicios";
import { SheetMovil } from "./Seet";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8 bg-white rounded-b-xl z-10">
      
      <div className="hidden md:flex items-center gap-x-1 font-Arimo font-bold ">
        <a href="/" className="px-3 py-2 hover:bg-gray-100 transition-all duration-500 rounded-lg">
        <p>FAQ</p>
        </a>
       <NavigationMenuDesktop />
      </div>

      <div className="w-full flex items-center gap-2   md:justify-center justify-start">
        <SheetMovil />
        <a href="/" className="flex items-center gap-1">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 md:h-18 w-auto"
          />
          <div className="hidden md:flex flex-col ">
              <p className="text-4xl font-black ">Teknova Ing</p>
              <span className="text-xs font-Arimo font-semibold text-[#702E7D] px-2">
                Soluciones tecnológicas integrales
              </span>
          </div>
        

           
        </a>
      </div>

      <div className="flex md:hidden">
         <a href="/" className="bg-[#702E7D] px-3 py-2 rounded-lg text-white">
          <p>Blog</p>
        </a>
      </div>
    
 
      <div className="hidden md:flex items-center gap-x-3 font-Arimo font-bold ">
         <NavigationMenuServicios />
       <a href="/" className="px-3 py-2 hover:bg-gray-100 transition-all duration-500 rounded-lg">
        <p>Contacto</p>
        </a>
        <a href="/" className="bg-[#702E7D] px-3 py-2 rounded-lg text-white">
          <p>Blog</p>
        </a>
      </div>

</header>
  );
}