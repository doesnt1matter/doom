const background = require("../img/background.png")

const Video = () => {
  return (
    <div className="video">
        <img className="video__background" src={background} alt="Not found" />
        <div className="video__wrap _container">
            <iframe src="https://www.youtube.com/embed/zXes95xZ8uo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Video