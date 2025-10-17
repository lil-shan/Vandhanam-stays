export function PricingSection() {
  const pricingTiers = [
    {
      name: "Deluxe Rooms",
      description: "Comfortable twin sharing accommodation",
      price: "₹4,000",
      period: "per night",
      whatsappMessage: "I want to reserve Deluxe Rooms",
      features: [
        "Twin sharing room",
        "Complimentary breakfast included",
        "All taxes included",
        "Free Wi-Fi",
        "Access to swimming pool",
        "Mountain view",
      ],
    },
    {
      name: "Valley View Rooms",
      description: "Premium rooms with stunning valley views",
      price: "₹5,000",
      period: "per night",
      whatsappMessage: "I want to reserve Valley View Rooms",
      features: [
        "Twin sharing room",
        "Spectacular valley views",
        "Complimentary breakfast included",
        "All taxes included",
        "Full pool access",
        "Rooftop terrace access",
        "Free Wi-Fi",
      ],
      featured: true,
    },
    {
      name: "Family Rate",
      description: "Perfect for large groups and family gatherings",
      price: "₹40,000",
      period: "total package",
      whatsappMessage: "I want to reserve the entire property for family",
      features: [
        "Accommodates 20 persons",
        "8 double rooms (twin sharing)",
        "4 extra beds included",
        "Complimentary breakfast included",
        "All taxes included",
        "Full property access",
        "Note: F&B costs extra",
      ],
    },
  ]

  return (
    <section className="bg-[#d4c5b0] px-2 md:px-8">
      <div className="bg-[#1a2820] py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#E8E4DC] mb-4">Choose your stay</h2>
            <p className="text-[#a39b8b] text-lg md:text-xl max-w-2xl mx-auto">
              Select the perfect accommodation for your mountain retreat
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="rounded-2xl p-8 bg-[#0f1a0f] flex flex-col">
                {/* Tier Name */}
                <h3 className="font-serif text-3xl md:text-4xl text-[#E8E4DC] mb-3">{tier.name}</h3>

                {/* Description */}
                <p className="text-[#a39b8b] text-sm md:text-base mb-8 leading-relaxed">{tier.description}</p>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-[#a39b8b] text-sm md:text-base">
                      <span className="mr-3 mt-1 text-[#E8E4DC]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6 pt-6 border-t border-[#E8E4DC]/10">
                  <div className="text-3xl md:text-4xl text-[#E8E4DC] mb-2">{tier.price}</div>
                  <div className="text-[#a39b8b] text-sm">{tier.period}</div>
                </div>

                <a
                  href={`https://wa.me/9547193758?text=${encodeURIComponent(tier.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-lg font-semibold text-sm md:text-base tracking-wide transition-all bg-[#1a2820] text-[#E8E4DC] hover:bg-[#2a3a2a] border border-[#E8E4DC]/20 text-center"
                >
                  BOOK NOW
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
