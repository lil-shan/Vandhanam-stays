"use client"

import { useState } from "react"

export function ReviewSection() {
  const [review, setReview] = useState("")

  const handleSendReview = () => {
    if (review.trim()) {
      const whatsappNumber = "918547193758"
      const encodedMessage = encodeURIComponent(`Review for Vandhanam Stays:\n\n${review}`)
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      window.open(whatsappUrl, "_blank")
    }
  }

  return (
    <section className="bg-[#d4c5b0] px-2 md:px-8">
      <div className="bg-[#1a2820] py-16 md:py-20 pb-24 md:pb-32 rounded-b-[80px] md:rounded-b-[120px]">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <div className="border border-[#3a4a3a] rounded-2xl p-8 md:p-10">
            <h2 className="font-serif text-3xl md:text-4xl text-[#E8E4DC] mb-3 text-center">Share your experience</h2>
            <p className="text-[#9ca3af] text-base md:text-lg mb-6 leading-relaxed text-center">
              {"Help others discover "}
              <span className="italic">the magic</span>
              {" of Vandhanam Stays."}
            </p>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              className="w-full bg-[#0f1a14] border border-[#3a4a3a] rounded-lg p-4 text-[#E8E4DC] placeholder:text-[#6b7280] min-h-[120px] mb-6 focus:outline-none focus:border-[#4a5a4a] resize-none"
            />
            <div className="text-center">
              <button
                onClick={handleSendReview}
                disabled={!review.trim()}
                className="bg-[#d4c5b0] text-[#1a2820] px-8 py-3 rounded-lg font-semibold hover:bg-[#c4b5a0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                SEND REVIEW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
