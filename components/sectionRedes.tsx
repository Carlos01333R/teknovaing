export default function SectionRedes() {
  return (
    <section className="max-w-[90%] md:max-w-6xl bg-white rounded-4xl h-auto py-5 mx-auto space-y-3 mt-10">
      
      <h2 className="text-gray-500 font-Arimo text-center font-semibold pt-10 pb-5">
        REDES
      </h2>

      <p className="text-5xl font-black text-center  md:w-4xl mx-auto">
        Soluciones en redes y <span className="hidden md:block">soporte tecnológico profesional.</span>
      </p>

      <p className="text-center text-lg font-Arimo text-gray-500 px-4 md:w-4xl mx-auto py-5 leading-relaxed">
        Ofrezco servicios especializados en instalación, mantenimiento y soporte 
        para sistemas de seguridad, infraestructura de red y equipos de cómputo. 
        Brindo soluciones eficientes, confiables y adaptadas a tus necesidades tecnológicas.
      </p>

   

      <img src="/redes.png" alt="" className="hidden md:block" />
      <img src="/redesMovil.png" alt="" className="md:hidden px-3 rounded-xl" />
    </section>
  )
}
