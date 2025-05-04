import ResponseGenerator from "@/components/response-generator"
import Features from "@/components/features"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import InfoCards from "@/components/info-cards"
import UseCaseCards from "@/components/use-case-cards"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Response Generator – Free AI Response",
  description:
    "AI Response Generator is a free AI response generator tool for fast, accurate AI response. Boost your communication with our easy-to-use response generator.",
  keywords: "AI response generator, AI response, AI response generator free, response generator",
  openGraph: {
    title: "AI Response Generator – Free AI Response",
    description:
      "AI Response Generator is a free AI response generator tool for fast, accurate AI response. Boost your communication with our easy-to-use response generator.",
    type: "website",
    url: "https://ai-response-generator.space",
  },
  alternates: {
    canonical: "https://ai-response-generator.space",
  },
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <section className="py-8 md:py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            AI Response Generator - Free AI Response Tool
          </h1>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Unlock Seamless Communication with AI Response Generator – The Ultimate Ai response generator free Tool for
            Instant Ai response and Reliable Response Generator Services.
          </p>
        </section>

        <section id="generator" className="py-6 scroll-mt-20">
          <ResponseGenerator />
        </section>

        <section className="py-12">
          <InfoCards />
        </section>

        <UseCaseCards />

        <section id="features" className="scroll-mt-20">
          <Features />
        </section>

        <section id="how-it-works" className="scroll-mt-20">
          <HowItWorks />
        </section>

        <Testimonials />

        <FAQ />
      </main>
      <Footer />
    </>
  )
}
