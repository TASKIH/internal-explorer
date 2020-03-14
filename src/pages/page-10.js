import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const TenthPage = ({location}) => {
  useEffect(() => {
    if (location.state.Food !== undefined) {
      window.localStorage.setItem(
        'Food', location.state.Food);
    }
  },[])
  return (
    <Layout>
      <SEO title="ブレーカー" />
      <h1>ブレーカー</h1>
      <p>いえのなかの　でんきを　かんしする　きかい。</p>
      <p>それがブレーカーだよ！</p>
      <p>こういう　きかいが　かべのうえのほうの　しかくい　はこのなかに　はいっているよ</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="breaker_siwtch.png" alt="ブレーカー"/>
      </div>
      <p>でんきをつかいすぎたとき　きかいをまもるために　でんきをとめる　すごいやつ！</p>
      <p>よるに　でんきがとまったとき　ブレーカーのばしょがわからないと　こゆびを　ぶつけるよ！</p>
      <div className="inline-block">
        <Link to="/page-11/"
              state={{ Breaker : true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-11/"
              state={{ Breaker: false }}>
          <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/page-9/">まえの　ページに　もどるよ</Link>
      </div>
    </Layout>
  );
}

export default TenthPage
