export function FacilitiesSection() {
  const facilities = [
    {
      title: "Free WiFi",
      description: "Stay connected with high-speed internet access throughout the property.",
    },
    {
      title: "Rooftop Access",
      description: "Enjoy panoramic mountain views from our exclusive rooftop terrace.",
    },
    {
      title: "Swimming Pool",
      description: "Relax and unwind in our pristine outdoor pool surrounded by nature.",
    },
    {
      title: "Luxury Rooms",
      description: "Spacious accommodations with modern amenities and stunning views.",
    },
    {
      title: "Complimentary Breakfast",
      description: "Start your day with a delicious breakfast included with every stay.",
    },
    {
      title: "Near Tourist Spots",
      description: "Conveniently located close to Vagamon's most popular attractions.",
    },
  ]

  return (
    <section className="bg-[#d4c5b0] px-2 md:px-8">
      <div className="bg-[#1a2820] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="font-serif text-2xl md:text-3xl text-[#d4c5b0] text-center mb-12">
            Everything you need for a perfect mountain retreat:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="border border-[#d4c5b0]/30 rounded-lg p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl text-[#d4c5b0] mb-3">{facility.title}</h3>
                <p className="text-[#a39b8b] text-sm md:text-base leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
