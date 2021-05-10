import React from "react";
import img1 from "../images/swaznager.jpg";
import img2 from "../images/bgIm3.jpg";
import img3 from "../images/swaznager.jpg";

function BasesecondCard(props) {
  return (
    <div classNameName="secondCard">
      <div className="secondCard">
        <img src={props.src} alt="Person" className="secondCard__image" />
        <p className="secondCard__name">{props.title}</p>
        <div className="grid-container">
          <div className="grid-date">Mercredi 24 septembre 2021</div>
          <div className="grid-restriction">+18</div>
        </div>

        <div className="secondCard__events-container">
          <button className="btn draw-border">
            <i className="fas fa-play"></i>
          </button>
          <button className="btn draw-border">
            <i className="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasesecondCard;
