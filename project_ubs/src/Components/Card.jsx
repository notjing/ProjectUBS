import React from 'react'
import "./Card.css"

export const Card = ({imgSrc, title, description, buttonText, link}) => {
  return (
    <div className = "card-container">
        {imgSrc && <img src = {imgSrc} alt = "Card Image" className = "card-img" />}
        {title && <h1 className = "card-title">{title}</h1>}
        {description && <p className = "card-description">{description}</p>}
        {buttonText && link && <a href = {link} className = "card-link"> {buttonText}</a>}
    </div>
  );
};