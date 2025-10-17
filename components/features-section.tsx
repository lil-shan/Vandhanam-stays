import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "Luxurious",
      titleEmphasis: "accommodations",
      description:
        "Eight beautifully appointed rooms with modern amenities, plush bedding, and stunning mountain views from every window.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00353.JPG-8365Fk8LZpcaW38dYz8vW3M6yEJ5sN.jpeg",
      alt: "Spacious bedroom with mountain views",
    },
    {
      number: "02",
      title: "Private",
      titleEmphasis: "swimming pool",
      description:
        "Relax in our pristine infinity pool surrounded by lush gardens, with breathtaking views of the Vagamon hills.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251007_180827206-Iayq44x0bvguCg9dhJmjkVRR7cGSSx.jpg",
      alt: "Swimming pool with mountain backdrop",
    },
    {
      number: "03",
      title: "Rooftop",
      titleEmphasis: "terrace views",
      description:
        "Unwind on our scenic rooftop terrace, perfect for morning coffee or evening gatherings under the stars.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00261.JPG-plOaschYH6SuLgH7faYU2eZ05sieQ1.jpeg",
      alt: "Rooftop terrace at dusk",
    },
  ]

  return (
    <section className="bg-[#d4c5b0] px-2 md:px-8">
      <div className="bg-[#1a2820] py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-[#E8E4DC] font-serif text-5xl md:text-6xl lg:text-7xl mb-6">What awaits you</h2>
          <p className="text-[#E8E4DC]/60 text-lg md:text-xl leading-relaxed">
            Discover the perfect blend of comfort and nature at Vandhanam Stays, where every detail is designed for your
            relaxation and enjoyment.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {features.map((feature, index) => (
              <div key={feature.number} className="flex flex-col">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-[#E8E4DC]/20 mb-6">
                  <span className="text-[#E8E4DC]/60 font-mono text-sm">{feature.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-[#E8E4DC] font-serif text-3xl md:text-4xl mb-4 leading-tight">
                  {feature.title} <em className="font-serif">{feature.titleEmphasis}</em>
                </h3>

                {/* Description */}
                <p className="text-[#E8E4DC]/60 text-base md:text-lg mb-8 leading-relaxed">{feature.description}</p>

                {/* Image */}
                <div className="mt-auto rounded-lg overflow-hidden aspect-[9/16] relative">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    loading="eager"
                    quality={40}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
