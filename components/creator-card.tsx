import { Heart } from 'lucide-react'

interface CreatorCardProps {
  name: string
  description: string
  supporters: number
  avatar: string
  color: string
}

export default function CreatorCard({
  name,
  description,
  supporters,
  avatar,
  color,
}: CreatorCardProps) {
  return (
    <div className="bg-white w-[200px] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:scale-105">
      {/* Avatar and name */}
      <div className="flex items-start gap-3 mb-3">
        <div className={`text-4xl w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br ${color}`}>
          {avatar}
        </div>
        <div className="">
          <h3 className="font-bold text-gray-900 text-sm leading-tight">
            {name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 leading-snug w-48 line-clamp-2 px-3">
        {description}
      </p>

      {/* Supporters count */}
      <div className="flex items-center gap-1">
        <Heart className="w-4 h-4 fill-red-500 text-red-500" />
        <span className="text-gray-600 text-sm font-medium">
          {supporters.toLocaleString()} supporters
        </span>
      </div>
    </div>
  )
}
