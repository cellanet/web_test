import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function SupportPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Support">
          <p>Hem có support gì đâu nhe.</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="./assets/face.jpeg" alt="bun la tui" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
