import React from "react";
import "./App.css";
import imgSrc from "./imageInSrc.jpg";

const myStyle = {
  border: "solid 1px black",
  maxWidth : "100vw"
}

function App() {
  return (
    <div>
      <div style={myStyle} className="position">

<h1 className="title red">Checkpoint JSX</h1>

<br />

<img src={imgSrc} alt="parfum1"/>

<br />

<img src="/imageInPublic.jpg" alt="parfum2" />

</div>

<video width="320" height="240" controls>

  <source src="/myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
