import React from "react";
import img1 from "../images/swaznager.jpg";
import img2 from "../images/bgIm3.jpg";
import img3 from "../images/swaznager.jpg";

function myCard(props) {
  return (
    <div className="myCard">
      <div className="face face1">
        <div className="content">
          <img src={props.src} />

          <div className="myCard__footer">
            <div className="myCard__footer__text-content">
              <div className="myCard__title">
                <strong>{props.title}</strong>
              </div>
              <div className="myCard__date">
                <strong>{props.date}</strong>
              </div>
            </div>

            <div className="myCard__restriction">+18</div>
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <a href="#">
            <i class="fas fa-play"></i>
          </a>
          <a href="#">
            <i class="fas fa-info-circle"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default myCard;
