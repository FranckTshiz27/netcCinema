import React from "react";
import BaseCard from "./BaseCard";
import Card from "./Card";
import img1 from "../images/bgIm3.jpg";
import img2 from "../images/bgImg.jpg";
import img3 from "../images/swaznager.jpg";

function MostWatched() {
  return (
    <section className="most-watched">
      <h2>
        <strong>FILMS </strong> ET <strong>SERIES</strong> A LA UNE
      </h2>
      <div className="most-watched__movies-container">
        <BaseCard src={img3} title="Les sous doués" />
        <BaseCard src={img3} title="Les sous doués" />
        <BaseCard src={img3} title="Les sous doués" />
        <BaseCard src={img3} title="Les sous doués" />
      </div>
      <hr />
    </section>
  );
}

export default MostWatched;
