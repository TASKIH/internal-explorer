import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const NinthPage = ({location}) => {
  useEffect(() => {
    if (location.state.Evacuation !== undefined) {
      window.localStorage.setItem(
        'Evacuation', location.state.Evacuation);
    }
  },[]);
  return (
    <Layout>
      <SEO title="ひじょうしょくとほぞんすい" />
      <h1>ひじょうしょく　と　ほぞんすい</h1>
      <p>おしいれのおく？　ゆかした？</p>
      <p>ふかくてくらい　やみのそこに　ねむっている</p>
      <p>みずとたべものを　さがしにいこう！</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="bousai_goods.png" alt="ひじょうしょくとほぞんすい"/>
      </div>
      <p>じしんやたいふうみたいに　さいがいがあったとき</p>
      <p>これがみんなをいかすんだ</p>
      <p>だいたい　うすあじで　おいしくはないよ</p>
      <div className="inline-block">
        <Link to="/page-10/"
              state={{ Food : true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-10/"
              state={{ Food: false }}>
          <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/page-8/">まえの　ページに　もどるよ</Link>
      </div>
    </Layout>
  );
}

export default NinthPage
