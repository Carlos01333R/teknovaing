'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart } from 'lucide-react'
import CreatorCard from './creator-card'
import ScrollAnimationContainer from './scroll-animation-container'
const creators = [
  {
    id: 1,
    name: 'Carlos Méndez',
    description:
      'El servicio de soporte técnico fue excelente. dejaron todo funcionando perfecto.',
    supporters: 8780,
    avatar: '🛠️',
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 2,
    name: 'Laura Ramírez',
    description:
      'La instalación de las cámaras quedó impecable. la calidad es increíble.',
    supporters: 4488,
    avatar: '📹',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    id: 3,
    name: 'Andrés Torres',
    description:
      'Me desarrollaron una página web moderna y rápida.  ¡Altamente recomendados!',
    supporters: 2156,
    avatar: '💻',
    color: 'from-orange-400 to-red-400',
  },
]

const creatorsRight = [
  {
    id: 4,
    name: 'María Fernanda',
    description:
      'Contraté la instalación de puntos de red para mi oficina y el trabajo quedó muy ordenado y profesional. La conexión ahora es mucho más estable.',
    supporters: 112,
    avatar: '🔌',
    color: 'from-green-400 to-teal-400',
  },
  {
    id: 5,
    name: 'Daniel Gutiérrez',
    description:
      'Excelente servicio. Me instalaron cámaras de seguridad y además me explicaron cómo monitorear todo desde el celular. Muy recomendados.',
    supporters: 1805,
    avatar: '📷',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    id: 6,
    name: 'Ana Rodríguez',
    description:
      'El equipo desarrolló mi página web corporativa y quedó mejor de lo que esperaba. Rápida, moderna y fácil de administrar.',
    supporters: 3242,
    avatar: '🌐',
    color: 'from-indigo-400 to-purple-400',
  },
]



export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden z-0 ">
      {/* Left side cards */}
      <div className='hidden md:block max-w-380  '>
 <ScrollAnimationContainer
        scrollY={scrollY}
        position="left"
        items={creators}
      />

      {/* Right side cards */}
      <ScrollAnimationContainer
        scrollY={scrollY}
        position="right"
        items={creatorsRight}
      />
      </div>
     

      {/* Center content */}
      <div className="relative z-0 md:min-h-screen flex flex-col items-center top-12 md:top-0 md:justify-center px-4 pb-20 md:pb-0">
        {/* Top rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs">
                ⭐
              </span>
            ))}
          </div>
          <span className="text-gray-700 font-medium text-xs md:text-base">
           Calificación de nuestros + 100.000 
          </span>
        </div>

        {/* Main heading */}
        <div>
        <h1 className="text-5xl md:text-7xl font-black text-center mb-6 max-w-4xl flex flex-col items-center">
         Solucion a tus  <span>problemas tecnicos </span> 
        </h1>
        </div>
       

        {/* Subtitle */}
        <p className="text-sm md:text-lg text-gray-600 text-center mb-12 max-w-2xl">
         Soporte tecnico, Instalación de camaras, Desarrollo web y movil, Instalacion de puntos de red y mucho mas
        </p>

        {/* CTA Button */}
        <button className="bg-[#702E7D] hover:bg-[#702E7D]/50 text-white font-bold py-4 px-12 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl animate-float">
          Ver todos los servicios
        </button>
      </div>
    </div>
  )
}
