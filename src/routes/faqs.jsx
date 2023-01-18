import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p>Lười lắm đừng hỏi!</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="./assets/face.jpeg" alt="hai to bun bo" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
