import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact tui chi?">
          <p>TranThiQuyen@MotToBunBoChoBanBunBo.com</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="./assets/face.jpeg" alt="mot to bun bo hoy" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
