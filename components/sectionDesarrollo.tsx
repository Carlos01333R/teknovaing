export default function SectionDesarrollo() {
  return (
    <section className="max-w-[90%] md:max-w-6xl bg-white rounded-4xl h-auto py-5 mx-auto space-y-3" >
     <h2 className="text-gray-500 font-Arimo text-center font-semibold pt-10 pb-5">DESARROLLO</h2>
     <p className="text-5xl  font-black text-center line-clamp-4 md:w-4xl mx-auto ">
        Soluciones digitales modernas <span className="hidden md:block">para impulsar tus ideas.</span> 

     </p>

     <p className="text-center text-lg font-Arimo text-gray-500 px-4 md:w-4xl mx-auto py-5 leading-relaxed">Ofrezco servicios completos de desarrollo, diseño y creación de experiencias digitales. Desde interfaces atractivas hasta aplicaciones funcionales, te ayudo a construir productos web y móviles adaptados a tus necesidades.</p>
  
     <img src="/desarrollo.png" alt="" className="hidden md:block" />
     <img src="/desarrolloMovil.png" alt="" className="md:hidden px-3 rounded-xl" />
    </section>
  )}