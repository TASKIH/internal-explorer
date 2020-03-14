import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SixthPage = ({location}) => {
  useEffect(() => {
    window.localStorage.setItem(
      'Candle', location.state.Candle);
  },[]);
  return (
    <Layout>
      <SEO title="しゅみらくら　げんしょう" />
      <h1>しゅみらくら　げんしょう</h1>
      <p>かべや　てんじょうにある　かおみたいに　みえるもようを　さがしてみよう！</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="220px-NEMA_5-15_Outlet_120V-15A.jpg" alt="コンセント"/>
      </div>
      <p>てんが　みっつ　あつまると　かおのように　みえるよね？</p>
      <p>これは　しゅみらくら　げんしょう　っていうんだ！</p>
      <p>おばけとかじゃないから　しんぱいしなくて　へいきだよ！</p>
      <p>└|∵|┐　┌|∵|┘ </p>
      <div className="inline-block">
        <Link to="/page-7/"
              state={{ Simulacrum : true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-7/"
              state={{ Simulacrum: false }}>
          <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/page-5/">まえの　ページに　もどるよ</Link>
      </div>
    </Layout>
  );
}

export default SixthPage
