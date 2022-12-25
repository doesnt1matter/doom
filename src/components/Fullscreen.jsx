import { useState } from "react"
import { SVG } from "./"

const background = require("../img/background.png")
const idsoftware = require("../img/id-software.png")

const Background = () => {
  const [height, setHeight] = useState(window.innerHeight)
  const [scrollScore, setScrollScore] = useState(window.scrollY)

  console.log(scrollScore)
  window.onresize = () => setHeight(window.innerHeight)
  window.onscroll = () => setScrollScore(window.scrollY);

  console.log(window.scrollY > height);

  return (
    <div className="fullscreen" id="fullscreen">
      <button onClick={() => window.scroll(0, 0)} className={`back-to-top-button ${window.scrollY > height ? "_active" : ""}`}><SVG name="slide-arrows"/></button>

      <div className="fullscreen__wrap _container">
        <div className="fullscreen__main-info">
          <div className="fullscreen__companies fullscreen-companies">
            <div className="fullscreen-companies__company fullscreen-companies-company">
              <div className="fullscreen-companies-company__logo"><img src={idsoftware} alt="Not found" /></div>
              <div className="fullscreen-companies-company__name">id SOFTWARE</div>
            </div>

            <div className="fullscreen-companies__company fullscreen-companies-company">
              <div className="fullscreen-companies-company__logo"><SVG name="bethesda" /></div>
              <div className="fullscreen-companies-company__name">Bethesda</div>
            </div>
          </div>

          <div className="fullscreen__doom-logo">
            <SVG name="DOOM" />
          </div>
        </div>

        <button className="fullscreen__slide-button" onClick={() => {window.scroll(0, height)}}>
          <div className="fullscreen-slide-button__arrows"><SVG name="slide-arrows" /></div>
          <div className="fullscreen-slide-button__text">Slide down</div>
        </button>
      </div>

      <img className="fullscreen__background" src={background} alt="Not found" />
    </div>
  )
}

export default Background
