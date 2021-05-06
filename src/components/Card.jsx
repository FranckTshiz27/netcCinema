import React from  'react';

function Card(props)
{
    return (

        <div  className="news__movies-container__movie">
            <img src={props.src} alt="dd"/> 
            <div  className="news__movies-container__movie__description">
            <div  className=" news__movies-container__movie__description__title">
                {props.title}
            </div>
            <div  className=" news__movies-container__movie__description__date">
            {props.date}
            </div>
            </div>
    </div>

    )
}

export default Card;