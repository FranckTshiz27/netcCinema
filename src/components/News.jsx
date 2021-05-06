import React  from 'react';
import Card   from './Card'
import img1 from "../images/bgIm3.jpg";
import img2 from "../images/bgImg.jpg";
import img3 from "../images/swaznager.jpg";

function News()
{

    return(

            <section  className="news">

                <div className="news__title">
                    <h2>
                        Les nouveautés
                    </h2>

                </div>
                <div className="news__movies-container">

                    <Card src={img1}  title="Premier Filme" date="Jeudi 12 Septembe 2021"/>

                    <Card src={img2}  title="Les sous doués" date="Samedi 16 2015"/>
                    <Card src={img3}  title="Les deux frères jumeaux" date="Samedi 16 2015"/>
                    <Card src={img1}  title="Les frères jumeaux" date="Samedi 16 2015"/>
                    <Card src={img1}  title="Les frères jumeaux" date="Samedi 16 2015"/>
                    <Card src={img1}  title="Les frères jumeaux" date="Samedi 16 2015"/>  
                </div>
                
            </section>
    );


}

export default News;