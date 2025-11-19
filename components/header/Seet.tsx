
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavigationMenuDesktop from "./Menu"
import { MenuMovil } from "./MenuMovil"

export function SheetMovil() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="md:hidden"/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
            <div className="relative w-full flex items-center gap-2 top-10 ">
    
        <a href="/" className="flex items-center gap-1">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-18 w-auto"
          />
          <div className="flex flex-col ">
              <p className="text-2xl font-Arimo font-bold  ">Teknova Ing</p>
              <span className="text-xs font-Arimo font-semibold text-[#702E7D] px-2">
                Soluciones tecnológicas integrales
              </span>
          </div>
        

           
        </a>
      </div>
        
        </SheetHeader>
        <div className="flex flex-col px-6 justify-start clear-start py-10">
            <MenuMovil />
         <ul className="py-2 flex flex-col gap-y-3 font-Arimo font-semibold">
          
          
             <li>Contacto</li>
            <a href="#">FAQ</a>
            
         </ul>
        </div>
        <SheetFooter>
            <div className="flex-1  mx-auto">
<p className="text-center font-Arimo text-sm"> 2023 Teknova Ing S.L. Todos los derechos reservados</p>
            </div>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
