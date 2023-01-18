import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Winnie Bún Bò"
        content="Tui thích ăn bún boà. Dị hoy nha, bye"
        illustration={<HeroIllustration />}
      /> 
    </Layout>
  )
}
