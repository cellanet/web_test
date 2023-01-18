import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About Bún">
          <p>
            Bún Bò ? Bún Bò, Bún Bò Bún Bò Bún Bò. Bún Bò Bún!
          </p>
          <p>
            Bún Bò Bún Bò Bún Bò Bún Bò. Bún Bò?! Bún Bò Bò.
          </p>
          <p>Bún Bò!!!</p>
        </ArticleContent>

        <ArticleMedia>
          <img
            src="./assets/face.jpeg"
            alt="Bún Bò."
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
