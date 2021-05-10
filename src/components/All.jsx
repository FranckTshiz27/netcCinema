import React from "react";
import Card from "./Card";
import img1 from "../images/bgIm3.jpg";
import img2 from "../images/bgImg.jpg";
import img3 from "../images/swaznager.jpg";
import BaseCard from "./BaseCard";

function all() {
  return (
    <section>
      <div className="all">
        <h2>REGARDER DES FILMS ET SERIES</h2>

        <div className="all__types-container">
          <button>Action</button>
          <button>Science fiction</button>
          <button>Comédies</button>
        </div>
        <div className="all__movies-container">
          <BaseCard src={img3} title="Premier Filme" />
          <BaseCard src={img2} title="Premier Filme" />
          <BaseCard src={img3} title="Premier Filme" />
          <BaseCard src={img1} title="Premier Filme" />
        </div>
      </div>
    </section>
  );
}

export default all;
