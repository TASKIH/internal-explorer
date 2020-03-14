import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const FourthPage = ({location}) => {
  localStorage.setItem(
    'IndoorDryingPlace', location.state.IndoorDryingPlace);
  return (
    <Layout>
      <SEO title="かさい　けいほう　き" />
      <h1>かさい　けいほう　き</h1>
      <p>もっと　てんじょうを　しらべてみよう。</p>    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="kaji_kasaikeihouki.png" alt="火災警報器"/>
    </div>
      <p>うちゅうせん　みたいな　しろい　でっぱり。</p>
      <p>それは　いえを　かじから　まもる　すごいやつ！</p>
      <p>これが　けむりを　みつけると、</p>
      <p>おおきな　おとで　みんなに　しらせるよ！</p>
      <div className="inline-block">
        <Link to="/page-5/"
              state={{ FireAlarm : true }}>
          <button>あった！</button>
        </Link>
        <Link to="/page-5/"
              state={{ FireAlarm: false }}>
          <button>なかった……</button>
        </Link>
      </div>
      <div>
        <Link to="/page-3/">まえの　ページに　もどるよ</Link>
      </div>
    </Layout>
  );
}

export default FourthPage
