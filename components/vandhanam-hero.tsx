"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function VandhanamHero() {
  const [imagesLoaded, setImagesLoaded] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const scrollPositionRef = useRef(0)

  const scrollingWords = ["beautiful", "comfort", "home", "heaven", "serenity", "luxury", "paradise", "tranquil"]

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00237.JPG-FP43O9af4LZM1p6blbeFw01n4oux1Z.jpeg",
      alt: "Vandhanam Stays exterior building",
      caption: "EXTERIOR VIEW",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00241.JPG-vJmNIzEVHZjhJlMqxwx6cXwMlLXsMg.jpeg",
      alt: "Living room with staircase",
      caption: "LIVING AREA",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00394.JPG-6eTjneWZdxMwNmfxAYlPsFOgwUTTd7.jpeg",
      alt: "Spacious living room interior",
      caption: "LOUNGE",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00325.JPG-j3nC6d7fHZeD7q1SClcsA1sGTuzxZk.jpeg",
      alt: "Bedroom with mountain view",
      caption: "VALLEY VIEW",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00359.JPG-4qDTImbUKRabmmuvP6VbdvpbhkCXsU.jpeg",
      alt: "Deluxe bedroom with balcony",
      caption: "DELUXE ROOM",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00353.JPG-E6vyzeCWxr6yj2xNKuaQK4LcMkYQ90.jpeg",
      alt: "Bedroom with scenic windows",
      caption: "MOUNTAIN ROOM",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00383.JPG-38D0ePsr2yU1GtoIEf69DS1qPMhuAP.jpeg",
      alt: "Bathroom amenities",
      caption: "AMENITIES",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00349.JPG-vqEjTSw2u8ZlVvyq2nhykeHx2I2bTo.jpeg",
      alt: "Modern bathroom",
      caption: "BATHROOM",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00403.JPG-rLzK9k7FMBKMKoOB4jULwIOH9DQzO6.jpeg",
      alt: "Interior hallway",
      caption: "INTERIORS",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00261.JPG-8sEhV0hHTGe1RbpEo8AtFHCYKa21Pr.jpeg",
      alt: "Upper floor dining area",
      caption: "DINING SPACE",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00414.JPG-nRAbR3cxRPVa6zbkZdSq9I7KXwjTWX.jpeg",
      alt: "Swimming pool with mountain views",
      caption: "POOL AREA",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00404.JPG-J4OyMjZ4XJGNYnKzLPmC4EiEQ8DoZp.jpeg",
      alt: "Upper floor corridor with sunset views",
      caption: "SUNSET VIEWS",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00405.JPG-c0yvfjCzzJXY5ksrvWy0NQW0b83OpI.jpeg",
      alt: "Upper floor hallway with balcony",
      caption: "HALLWAY",
    },
  ]

  useEffect(() => {
    const preloadPromises = galleryImages.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.onload = resolve
        img.onerror = reject
        img.src = image.src
      })
    })

    Promise.all(preloadPromises).catch(() => {
      // Silently handle preload errors
    })
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const imageWidth = window.innerWidth < 768 ? 160 + 24 : 200 + 32 // image width + gap
    const totalWidth = imageWidth * galleryImages.length // width of one complete set
    const scrollSpeed = window.innerWidth < 768 ? 0.3 : 0.3 // pixels per frame

    let lastTime = performance.now()
    const targetFPS = 60
    const frameTime = 1000 / targetFPS

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime

      // Only update if enough time has passed (throttle to 60fps)
      if (deltaTime >= frameTime) {
        scrollPositionRef.current += scrollSpeed

        // When we've scrolled past one complete set, reset to beginning
        // This creates seamless loop since we have 2 identical sets
        if (scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current = 0
        }

        // Apply smooth transform with GPU acceleration
        if (container) {
          container.style.transform = `translate3d(-${scrollPositionRef.current}px, 0, 0)`
        }

        lastTime = currentTime
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#d4c5b0] flex flex-col px-2 md:px-8 pt-8">
      <div className="bg-[#1a2820] rounded-t-[3rem] flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-6 md:py-10">
          <p className="text-[#8a9a8f] text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6">vagamon</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center mb-8 md:mb-12 text-balance leading-[0.9] tracking-tight text-[#f5f1e8]">
            Vandhanam
            <br />
            <span className="italic font-light">Stays</span>
          </h1>

          <div className="w-full max-w-4xl overflow-hidden mb-12 md:mb-16">
            <div className="flex gap-8 animate-scroll-text whitespace-nowrap will-change-transform">
              {scrollingWords.map((word, index) => (
                <span key={`first-${index}`} className="text-lg md:text-xl text-[#8a9a8f] font-light italic">
                  {word}
                </span>
              ))}
              {scrollingWords.map((word, index) => (
                <span key={`second-${index}`} className="text-lg md:text-xl text-[#8a9a8f] font-light italic">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-[#8a9a8f] max-w-2xl text-sm md:text-base leading-relaxed">
            Experience luxury nestled in the hills. Where comfort meets nature, and every moment becomes a cherished
            memory.
          </p>
        </div>

        <div className="w-full overflow-hidden py-8 md:py-12 mt-8 md:mt-12 border-t border-[#2a3830]">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 will-change-transform"
            style={{ isolation: "isolate", transform: "translateZ(0)" }}
          >
            {/* First set of images */}
            {galleryImages.map((image, index) => (
              <div
                key={`set1-${index}`}
                className="relative flex-shrink-0 bg-[#f5f1e8] p-3 md:p-4 shadow-xl transition-shadow duration-300 gallery-card"
              >
                <div className="w-[160px] md:w-[200px] h-[160px] md:h-[200px] overflow-hidden bg-gray-100">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    loading="eager"
                    quality={40}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                    onLoad={() => setImagesLoaded((prev) => prev + 1)}
                    sizes="(max-width: 768px) 160px, 200px"
                    priority={index < 3}
                  />
                </div>
                <div className="mt-2 md:mt-3 text-center">
                  <p className="text-[#1a2820] text-xs md:text-sm font-light tracking-wider">{image.caption}</p>
                </div>
              </div>
            ))}
            {/* Second set of images (duplicate for seamless loop) */}
            {galleryImages.map((image, index) => (
              <div
                key={`set2-${index}`}
                className="relative flex-shrink-0 bg-[#f5f1e8] p-3 md:p-4 shadow-xl transition-shadow duration-300 gallery-card"
              >
                <div className="w-[160px] md:w-[200px] h-[160px] md:h-[200px] overflow-hidden bg-gray-100">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    loading="eager"
                    quality={40}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                    sizes="(max-width: 768px) 160px, 200px"
                  />
                </div>
                <div className="mt-2 md:mt-3 text-center">
                  <p className="text-[#1a2820] text-xs md:text-sm font-light tracking-wider">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
