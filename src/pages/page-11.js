import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const MaruBatsu = ({isMaru, text}) => {
  isMaru = JSON.parse(isMaru);
  return (
    <React.Fragment>
      {isMaru && (
        <React.Fragment>
          <div style={{ maxWidth: `32px`, marginBottom: `0.25rem` }}><Image filename="62649.jpg" alt="花丸"/></div><p>{text}</p>
        </React.Fragment>
      )}
      {!isMaru && (
        <div><span className="NG">×</span><p>{text}</p></div>
      )}
    </React.Fragment>
  );
};

const TenthPage = ({location}) => {
  localStorage.setItem('Breaker', location.state.Breaker);
  const state = {
    UnderfloorStorage: localStorage.getItem('UnderfloorStorage'),
    IndoorDryingPlace: localStorage.getItem('IndoorDryingPlace'),
    FireAlarm: localStorage.getItem('FireAlarm'),
    Candle: localStorage.getItem('Candle'),
    Simulacrum: localStorage.getItem('Simulacrum'),
    Extinguisher: localStorage.getItem('Extinguisher'),
    Evacuation: localStorage.getItem('Evacuation'),
    Food: localStorage.getItem('Food'),
    Breaker: location.state.Breaker,
  };
  return (
    <Layout>
      <SEO title="けっか　はっぴょう" />
      <h1>ゴール！</h1>
      <p>おめでとう！</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="monogatari_alibaba.png" alt="発見"/>
      </div>
      <p>きみは　いえのたんけんから　ぶじに　きかんしたよ！</p>
      <p>たんけんか　マルコ・ポーロが　ぼうけんからかえって</p>
      <p>「とうほうけんぶんろく」を　かいたみたいに</p>
      <p>きみも　たんけんの　けっかを　ふりかえろう！</p>
      <h2>きみの　とうほうけんぶんろく</h2>

      <MaruBatsu isMaru={state.UnderfloorStorage} text="ゆかした　しゅうのう"/>
      <MaruBatsu isMaru={state.IndoorDryingPlace} text="しつない　ものほし"/>
      <MaruBatsu isMaru={state.FireAlarm} text="かさい　けいほう　き"/>
      <MaruBatsu isMaru={state.Candle} text="ろうそく"/>
      <MaruBatsu isMaru={state.Simulacrum} text="しゅみらくら　げんしょう"/>
      <MaruBatsu isMaru={state.Extinguisher} text="しょうかき"/>
      <MaruBatsu isMaru={state.Evacuation} text="ひなん　きぐ"/>
      <MaruBatsu isMaru={state.Food} text="ひじょうしょくとほぞんすい"/>
      <MaruBatsu isMaru={state.Breaker} text="ブレーカー"/>
      <div className="inline-block">
        <Link to="/page-12/">
          <button>みんなに　たんけんのことを　はなそう！</button>
        </Link>
      </div>
      <div>
        <Link to="/">はじめからやる！</Link>
      </div>
    </Layout>
  );
}

export default TenthPage
