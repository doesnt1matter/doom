import {SVG} from "./"

const Platforms = () => {
  return (
    <div className="platforms">
        <div className="platforms__wrap _container">
            <div className="platforms__title">
                Platforms
            </div>
            <div className="platforms__subtitle">
                Platforms for killing some monsters by Doom Guy 
            </div>

            <div className="platforms__logos">
                <div className="logo">
                    <SVG name="win"/>
                </div>
                <div className="logo">
                    <SVG name="ps"/>
                </div>
                <div className="logo">
                    <SVG name="steam"/>
                </div>
                <div className="logo">
                    <SVG name="nint"/>
                </div>
                <div className="logo">
                    <SVG name="macos"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Platforms