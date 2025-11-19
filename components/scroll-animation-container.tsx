import { useEffect, useRef, useState } from 'react'
import CreatorCard from './creator-card'

interface Creator {
  id: number
  name: string
  description: string
  supporters: number
  avatar: string
  color: string
}

interface ScrollAnimationContainerProps {
  scrollY: number
  position: 'left' | 'right'
  items: Creator[]
}

export default function ScrollAnimationContainer({
  scrollY,
  position,
  items,
}: ScrollAnimationContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Calculate the displacement based on scroll
  // The displacement increases as you scroll down
  const displacement = scrollY * 0.5

  // Left cards move left, right cards move right
  const xOffset = position === 'left' ? -displacement : displacement

  return (
    <div
      ref={containerRef}
      className={`fixed top-44 bottom-0 w-1/6 pointer-events-none transition-all duration-100 ${
        position === 'left' ? 'left-0' : 'right-8'
      }`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      {items.map((creator, index) => {
        const isSpecial = index === 0 || index === 2

        // Posición inicial (fuera de pantalla)
        const initialOffset = position === 'left' ? -200 : 200
        
        // desplazamiento normal con estado inicial
        const baseTransform = isLoaded 
          ? `translateX(${xOffset}px)`
          : `translateX(${initialOffset}px)`

        // desplazamiento invertido con estado inicial
        const inverted = position === 'left' ? displacement : -displacement
        const specialTransform = isLoaded
          ? `translateX(${inverted}px) rotate(${
              position === 'left' ? '-10deg ' : '5deg'
            }) `
          : `translateX(${initialOffset}px) rotate(${
              position === 'left' ? '-10deg ' : '5deg'
            })`
       

        // Opacidad: desaparece conforme se aleja
        const opacity = isSpecial
          ? Math.max(1 - Math.abs(inverted) / 200, 0)
          : 1

        return (
          <div
            key={creator.id}
            style={{
              transform: isSpecial ? specialTransform : baseTransform,
              opacity: isLoaded ? opacity : 0, // Inicialmente transparente
              transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
             
            }}
          >
            <CreatorCard
              name={creator.name}
              description={creator.description}
              supporters={creator.supporters}
              avatar={creator.avatar}
              color={creator.color}
            />
          </div>
        )
      })}
    </div>
  )
}