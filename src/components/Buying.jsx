import { Card } from "./";

const Doom2IMG = require("../img/Doom2.png")
const Doom3IMG = require("../img/Doom3.png")
const Doom4IMG = require("../img/Doom4.png")
const DoomEternalIMG = require("../img/DoomEternal.png")
const Doom1993IMG = require("../img/Doom1993.png")
const Doom2016IMG = require("../img/Doom2.png")

const Buying = () => {
  const cardData = [
    {
      image: Doom2IMG,
      name: "DOOM II: Hell on Earth",
      cost: 7
    },
    {
      image: Doom3IMG,
      name: "DOOM 3",
      cost: 18
    },
    {
      image: Doom4IMG,
      name: "DOOM 4",
      cost: 25
    },
    {
      image: DoomEternalIMG,
      name: "DOOM ETERNAL",
      cost: 25
    },
    {
      image: Doom1993IMG,
      name: "DOOM 1993",
      cost: 2
    },
    {
      image: Doom2016IMG,
      name: "DOOM 2016",
      cost: 19
    }
  ]

  return (
    <div className="buying">
      <div className="buying__wrap _container">
        <div className="buying__title">Buying</div>
        <div className="buying__subtitle">This you can buy DOOM games for you or your secret demons</div>

        <div className="buying__cards">
          {cardData.map((card, index) => {
            return (
              <Card image={card.image} name={card.name} cost={card.cost} id={index} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Buying