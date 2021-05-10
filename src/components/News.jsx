import React from "react";
import BaseCard from "./BaseCard";
import Card from "./Card";
import img1 from "../images/bgIm3.jpg";
import img2 from "../images/bgImg.jpg";
import img3 from "../images/swaznager.jpg";

function News() {
  return (
    <div className="news-backGround">
      <section className="news">
        <h2>LES NOUVEAUTES</h2>
        <div className="news__movies-container">
          <BaseCard src={img3} title="Les sous doués" />
          <BaseCard src={img3} title="Les sous doués" />
          <BaseCard src={img3} title="Les sous doués" />
          <BaseCard src={img3} title="Les sous doués" />
        </div>
      </section>
    </div>
  );
}

export default News;
