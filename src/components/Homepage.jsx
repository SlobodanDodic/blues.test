import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Homepage({ dataFadeRight }) {
  const [style, setStyle] = useState("row-info");
  const [rays, setRays] = useState("rays");

  const changeStyle = () => {
    setStyle("row-info-hide");
    setRays("rays-hide");
  };

  const handeClick = () => {
    alert("I will tell eventually");
  };

  return (
    <div id="homepage" className="homepage">
      <div className={rays}></div>

      <div className={style} data-aos={dataFadeRight}>
        You're looking at a temporary website version, You're looking at a temporary website version You're looking at a
        temporary.
        <Button onClick={changeStyle}>x</Button>
      </div>

      <div className="home">
        <div className="home-title">
          Lorem Ipsum has been the industry's.<span>|</span>
        </div>
        <div className="home-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </div>
        <div className="home-text">
          <Button onClick={handeClick}>Tell me more</Button>
        </div>
      </div>

      <div className="blackSquare"></div>
    </div>
  );
}
