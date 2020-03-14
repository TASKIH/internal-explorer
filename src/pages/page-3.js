import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const ThirdPage = ({location}) => {
  useEffect(() => {
    if (location.state.UnderfloorStorage !== undefined) {
      window.localStorage.setItem(
        'UnderfloorStorage', location.state.UnderfloorStorage);
    }
  },[])

  return (
    <Layout>
      <SEO title="しつない　ものほし" />
      <h1>しつない　ものほし</h1>
      <p>てんじょうを　みてみよう。</p>
      <p>もしも　つりわ　みたいな　ぼうが　ぶらさがっていたら</p>
      <p>それは　しつない　ものほし　かもしれない。</p>
      <p>そとに　でれなくても　せんたくものが　ほせる、</p>
      <p>べんりな　どうぐ　だよ！</p>
      <div className="inline-block">
        <Link to="/page-4/"
              state={{ IndoorDryingPlace : true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-4/"
              state={{ IndoorDryingPlace: false }}>
          <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/page-2/">まえの　ページに　もどるよ</Link>
      </div>
    </Layout>
  );
}

export default ThirdPage
