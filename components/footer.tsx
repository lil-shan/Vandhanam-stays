import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#d4c5b0] border-t border-[#1a2e1a]/10">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          {/* Left side: Logo and location */}
          <div className="flex flex-col gap-3">
            <Image
              src="/logo.png"
              alt="Vandhanam Stays Logo"
              width={96}
              height={96}
              className="h-20 md:h-24 w-auto object-contain"
              loading="eager"
              quality={40}
              priority
            />
            <p className="text-[#1a2e1a]/70 text-sm md:text-base uppercase tracking-wider">Vagamon, Kerala</p>
          </div>

          {/* Right side: Contact and Links columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {/* Contact column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[#1a2e1a] text-sm md:text-base uppercase tracking-wider font-semibold mb-1">
                Contact
              </h3>
              <a
                href="tel:+919547193758"
                className="text-[#1a2e1a]/80 text-sm md:text-base uppercase tracking-wide hover:text-[#1a2e1a] transition-colors"
              >
                +91 95471 93758
              </a>
              <a
                href="mailto:vandhanamstay@gmail.com"
                className="text-[#1a2e1a]/80 text-sm md:text-base uppercase tracking-wide hover:text-[#1a2e1a] transition-colors"
              >
                vandhanamstay@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/place/9%C2%B039'31.9%22N+76%C2%B054'41.9%22E/@9.6588637,76.9090647,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.6588637!4d76.9116396?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a2e1a]/80 text-sm md:text-base uppercase tracking-wide hover:text-[#1a2e1a] transition-colors"
              >
                Location
              </a>
            </div>

            {/* Links column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[#1a2e1a] text-sm md:text-base uppercase tracking-wider font-semibold mb-1">Links</h3>
              <a
                href="https://www.instagram.com/vandhanam_stay?igsh=MXdzMWZkOGo5djA3NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a2e1a]/80 text-sm md:text-base uppercase tracking-wide hover:text-[#1a2e1a] transition-colors"
              >
                Instagram
              </a>
              <div className="flex flex-col gap-1.5 mt-2">
                <span className="text-[#1a2e1a]/60 text-xs md:text-sm uppercase tracking-wider font-medium">
                  Our Sister Retreat
                </span>
                <a
                  href="https://www.peyolisplace.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a2e1a]/80 text-sm md:text-base uppercase tracking-wide hover:text-[#1a2e1a] transition-colors"
                >
                  Peyoli Space - Cherai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
