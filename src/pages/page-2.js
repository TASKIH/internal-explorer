import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="ゆかした　しゅうのう" />
    <h1>ゆかした　しゅうのう</h1>
    <p>いえの　ゆかにある　ふしぎな　しかくけいを　さがしてみよう！</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="room_yukashita_syuunou_close.png" alt="床下収納"/>
    </div>
    <p>もしかすると　それは　「ゆかした　しゅうのう」かも。</p>
    <p>せんざい　とか　かんづめ　とか</p>
    <p>いきのびるために　ひつような</p>
    <p>いろいろな　ものが　しまって　あるよ！</p>
      <div className="inline-block">
        <Link to="/page-3/"
              state={{ UnderfloorStorage: true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-3/"
              state={{ UnderfloorStorage: false }}>
              <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/">まえの　ページに　もどるよ</Link>
      </div>
  </Layout>
)

export default SecondPage
