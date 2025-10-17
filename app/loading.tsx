"use client"

import { useEffect, useState } from "react"

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      setIsVisible(false)
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }, 1500)

    return () => {
      clearTimeout(timer)
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 bg-[#1a2820] flex items-center justify-center z-50 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#E8E4DC] mb-2">
            Vandhanam <span className="italic font-light">Stays</span>
          </h2>
          <p className="text-[#8a9a8f] text-sm tracking-[0.3em] uppercase">Vagamon</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 bg-[#2d4a2d] rounded-full animate-bounce-left" style={{ animationDelay: "0s" }} />
          <div className="w-4 h-4 bg-[#3a5a3a] rounded-full" />
          <div className="w-4 h-4 bg-[#4a6a4a] rounded-full" />
          <div className="w-4 h-4 bg-[#5a7a5a] rounded-full" />
          <div className="w-4 h-4 bg-[#6a8a6a] rounded-full animate-bounce-right" style={{ animationDelay: "0s" }} />
        </div>
      </div>
    </div>
  )
}
