import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const FivePage = ({location}) => {
  localStorage.setItem(
    'FireAlarm', location.state.FireAlarm);
  return (
    <Layout>
      <SEO title="ろうそく" />
      <h1>ろうそく</h1>
      <p>ろうそくを　さがしてみよう！</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="rousoku.png" alt="ろうそく"/>
      </div>
      <p>はるかむかし　エジプトで　ピラミッドがつくられたころから</p>
      <p>ろうそくは　つかわれていたんだ！</p>
      <p>いまでも　ていでんの　ときに　たよりになる　すごいやつ。</p>
      <p>ケーキのろうそくよりも　もっとふといのを　さがしてみよう！</p>
      <div className="inline-block">
        <Link to="/page-6/"
              state={{ Candle : true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-6/"
              state={{ Candle: false }}>
          <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/page-4/">まえの　ページに　もどるよ</Link>
      </div>
    </Layout>
  );
}

export default FivePage
