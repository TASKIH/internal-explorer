import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SeventhPage = ({location}) => {
  useEffect(() => {
    window.localStorage.setItem(
      'Simulacrum', location.state.Simulacrum);
  },[]);
  return (
    <Layout>
      <SEO title="しょうかき" />
      <h1>しょうかき</h1>
      <p>もし　かじになっちゃっても　まだ　ひがちいさければ　けせるかも。</p>
      <p>しょうかきは　ひをけしてくれる　すごいやつなんだ！</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="syoukaki.png" alt="しょうかき"/>
      </div>
      <p>よくみると　マンションやアパートの　ろうかとかにもあるよ！</p>
      <p>ちかくにいる　おとなのひとに　つかいかたを　きいてみて</p>
      <p>こたえられなかったら　いえは　たすからないよ。</p>
      <p>もしつかうときは　おとなのひとに　やってもらおう！</p>
      <div className="inline-block">
        <Link to="/page-8/"
              state={{ Extinguisher : true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-8/"
              state={{ Extinguisher: false }}>
          <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/page-6/">まえの　ページに　もどるよ</Link>
      </div>
    </Layout>
  );
}

export default SeventhPage
