"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { VandhanamHero } from "@/components/vandhanam-hero"
import { ExperienceSection } from "@/components/experience-section"
import { FeaturesSection } from "@/components/features-section"
import Loading from "./loading"

const AboutSection = dynamic(
  () => import("@/components/about-section").then((mod) => ({ default: mod.AboutSection })),
  {
    loading: () => <div className="min-h-screen bg-[#d4c5b0]" />,
    ssr: false,
  },
)

const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => ({ default: mod.PricingSection })),
  {
    loading: () => <div className="min-h-screen bg-[#d4c5b0]" />,
    ssr: false,
  },
)

const FacilitiesSection = dynamic(
  () => import("@/components/facilities-section").then((mod) => ({ default: mod.FacilitiesSection })),
  {
    loading: () => <div className="min-h-screen bg-[#d4c5b0]" />,
    ssr: false,
  },
)

const ReviewSection = dynamic(
  () => import("@/components/review-section").then((mod) => ({ default: mod.ReviewSection })),
  {
    loading: () => <div className="min-h-screen bg-[#d4c5b0]" />,
    ssr: false,
  },
)

const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[400px] bg-[#d4c5b0]" />,
  ssr: false,
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [contentReady, setContentReady] = useState(false)

  useEffect(() => {
    // Mark content as ready after initial render
    setContentReady(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      <main
        className="min-h-screen bg-[#d4c5b0]"
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease-in" }}
      >
        <VandhanamHero />
        <ExperienceSection />
        <FeaturesSection />
        <AboutSection />
        <PricingSection />
        <FacilitiesSection />
        <ReviewSection />
        <Footer />
      </main>
    </>
  )
}
