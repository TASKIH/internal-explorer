
import Loadable from "@loadable/component"
import React, { Component } from "react"
import { withPrefix } from "gatsby"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
const GetAnimation = () => {
  const val = getRandomInt(0, 6);
  switch (val) {
    case 0:
      return "Star";
    case 1:
      return "shrink";
    case 2:
      return "rotate";
    case 3:
      return "shake";
    case 4:
      return "jump";
  }
  return "cry";
};

const FlareReact = Loadable(() => import("flare-react"));

const Medged = props => {
  return <FlareReact
    className="medjged" style={{position: `fixed`, bottom: 0, right: 0}}
    width={300}
    height={300}
    animationName={GetAnimation()}
    file={withPrefix('/medjed.flr')}/>
};

export default Medged