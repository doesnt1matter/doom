import "./style/index.scss"
import "./style/nulling.scss"

import {Fullscreen, Platforms, Video, Buying, Contacts, SVG} from "./components"

function App() {

  return (
    <div className="app">
      <Fullscreen />
      <Platforms />
      <Video />
      <Buying />
      <Contacts />
    </div>
  );
}

export default App;
