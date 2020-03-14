import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import TwitterShareButton from "react-share/es/TwitterShareButton"
import TwitterIcon from "react-share/es/TwitterIcon"

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
  const [url, setUrl] = useState("");

  useEffect(() => {
    const state = {
      UnderfloorStorage: window.localStorage.getItem('UnderfloorStorage'),
      IndoorDryingPlace: window.localStorage.getItem('IndoorDryingPlace'),
      FireAlarm: window.localStorage.getItem('FireAlarm'),
      Candle: window.localStorage.getItem('Candle'),
      Simulacrum: window.localStorage.getItem('Simulacrum'),
      Extinguisher: window.localStorage.getItem('Extinguisher'),
      Evacuation: window.localStorage.getItem('Evacuation'),
      Food: window.localStorage.getItem('Food'),
      Breaker: window.localStorage.getItem('Breaker'),
    };
    const baseUrl = "https://internal-explorer.netlify.com/result?res=";
    let url = baseUrl;
    url += (state.UnderfloorStorage)? "1" : "0";
    url += (state.UnderfloorStorage)? "1" : "0";
    url += (state.IndoorDryingPlace)? "1" : "0";
    url += (state.FireAlarm)? "1" : "0";
    url += (state.Candle)? "1" : "0";
    url += (state.Simulacrum)? "1" : "0";
    url += (state.Extinguisher)? "1" : "0";
    url += (state.Evacuation)? "1" : "0";
    url += (state.Food)? "1" : "0";
    url += (state.Breaker)? "1" : "0";
    setUrl(baseUrl);

  },[]);

  return (
    <Layout>
      <SEO title="シェア" />
      <h1>みんなに　けっかを　はなそう！</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image filename="oekaki_boy.png" alt="がようし"/>
      </div>
      <p>がようしに　きみのたんけんの　けっかを　かいてみよう！</p>
      <p>うまく　かけたら　おとなのひとに　しゃしんをとってもらって</p>
      <p>「ツイッターにのせておいて」っていってね！</p>
      <p>You can also share the result by clicking the button below.</p>
      <TwitterShareButton title="たんけんのけっかだよ！ #web1week" url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <div>
        <Link to="/">はじめからやる！</Link>
      </div>
    </Layout>
  );
}

export default TenthPage
