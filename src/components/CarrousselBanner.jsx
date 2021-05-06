import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img1 from "../images/bgIm3.jpg";
import img2 from "../images/bgImg.jpg";
import img3 from "../images/swaznager.jpg";
import img4 from "../images/imgBanner1.jpg";



function CarrousselBanner(){
    
        return (
            <div id="carouselExampleIndicators" className="carousel slide p-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              
              <div  className="banner__carroussel__container__images">
              <img src={img1} className="d-block w-100" alt="..."/>
              <img src={img3} className="d-block w-100" alt="..."/>
              <img src={img1} className="d-block w-100" alt="..."/>
              </div>
                
              </div>
              <div className="carousel-item">
              <div  className="banner__carroussel__container__images">
              <img src={img4} className="d-block w-100" alt="..."/>
              <img src={img4} className="d-block w-100" alt="..."/>
              <img src={img4} className="d-block w-100" alt="..."/>
              </div>
              </div>
              <div className="carousel-item">
              <div  className="banner__carroussel__container__images">
              <img src={img1} className="d-block w-100" alt="..."/>
              <img src={img1} className="d-block w-100" alt="..."/>
              <img src={img1} className="d-block w-100" alt="..."/>
              </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
                
                
            
        );   

}

export default CarrousselBanner;