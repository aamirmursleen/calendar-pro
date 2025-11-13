import { Hero } from '@/components/landing/Hero'
import { Problem } from '@/components/landing/Problem'
import { Solution } from '@/components/landing/Solution'
import { Features } from '@/components/landing/Features'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Integrations } from '@/components/landing/Integrations'
import { Pricing } from '@/components/landing/Pricing'
import { SocialProof } from '@/components/landing/SocialProof'
import { UseCases } from '@/components/landing/UseCases'
import { FAQ } from '@/components/landing/FAQ'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Integrations />
      <UseCases />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
