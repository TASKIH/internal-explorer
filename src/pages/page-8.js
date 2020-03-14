import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const EighthPage = ({location}) => {
  useEffect(() => {
    if (location.state.Extinguisher !== undefined) {
      window.localStorage.setItem(
        'Extinguisher', location.state.Extinguisher);
    }
  },[]);
  return (
    <Layout>
      <SEO title="ひなん　きぐ" />
      <h1>ひなん　きぐ</h1>
      <p>もしきみが　マンションの　うえのほうの　かいにすんでるなら</p>
      <p>ひなんきぐが　あるよ！</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="hikkosi413109_TP_V.jpg" alt="ひなんきぐ"/>
      </div>
      <p>だいたいベランダや　そとのろうかにあるから　さがしてみよう！</p>
      <p>まんがいちのときに　これをつかえば　にげられるよ！</p>
      <div className="inline-block">
        <Link to="/page-9/"
              state={{ Evacuation : true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-9/"
              state={{ Evacuation: false }}>
          <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/page-7/">まえの　ページに　もどるよ</Link>
      </div>
    </Layout>
  );
}

export default EighthPage
