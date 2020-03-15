import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="たんけんぼくのいえ" description="じぶんのいえを　たんけんしてみよう！"/>
    <p>いつも　すごしているのに　じつは　しらない　じぶんの　いえ。</p>
    <p>
    あの　いだいな　たんけんか　 「マルコ・ポーロ」に　なったきぶんで　たんけんしてみよう！</p>
    <p>どうせ　そとには　でられないんだから。</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image  filename="503453.jpg" alt="探検家"/>
    </div>
    <Link to="/page-2/"><button>はじめよう！</button></Link>
  </Layout>
)

export default IndexPage
