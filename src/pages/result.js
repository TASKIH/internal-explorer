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
  const urlParamStr = window.location.search.substring(1);
  let params = {};

  console.log(urlParamStr);
  //urlパラメータをオブジェクトにまとめる
  urlParamStr.split('&').forEach( param => {
    const temp = param.split('=')
    //pramsオブジェクトにパラメータを追加
    params = {
      ...params,
      [temp[0]]: temp[1]
    }
  });
  console.log(params);

  const state = {
    UnderfloorStorage: params["res"][0]==="1",
    IndoorDryingPlace: params["res"][1]==="1",
    FireAlarm: params["res"][2]==="1",
    Candle: params["res"][3]==="1",
    Simulacrum: params["res"][4]==="1",
    Extinguisher: params["res"][5]==="1",
    Evacuation: params["res"][6]==="1",
    Food: params["res"][7]==="1",
    Breaker: params["res"][8]==="1",
  };


  return (
    <Layout>
      <SEO title="シェア" />
      <h1>うちのいえは　こんなかんじだったよ！！</h1>
      <MaruBatsu isMaru={state.UnderfloorStorage} text="ゆかした　しゅうのう"/>
      <MaruBatsu isMaru={state.IndoorDryingPlace} text="しつない　ものほし"/>
      <MaruBatsu isMaru={state.FireAlarm} text="かさい　けいほう　き"/>
      <MaruBatsu isMaru={state.Candle} text="ろうそく"/>
      <MaruBatsu isMaru={state.Simulacrum} text="しゅみらくら　げんしょう"/>
      <MaruBatsu isMaru={state.Extinguisher} text="しょうかき"/>
      <MaruBatsu isMaru={state.Evacuation} text="ひなん　きぐ"/>
      <MaruBatsu isMaru={state.Food} text="ひじょうしょくとほぞんすい"/>
      <MaruBatsu isMaru={state.Breaker} text="ブレーカー"/>
      <div>
        <Link to="/">またたんけんする！</Link>
      </div>
    </Layout>
  );
}

export default TenthPage
