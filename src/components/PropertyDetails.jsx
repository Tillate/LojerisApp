import React from 'react';
import "../styles/detailsProperty.css"


export default function DetailProperty(props) {
    const { property } = props;
  
    if (property.length === 0) {
        return <p></p>
    }
  
    return (
        <div className="cardDetails">
            <h1>Informations sur {property.category.name} situé dans le quartier {property.district.name} :</h1>
            <ul>
                <li>Prix : {property.price} €</li>
                <li>Surface : {property.surface} m²</li>
                <li>Chambres : {property.bedroom}</li>
            </ul>
            <h2>Avantages : </h2>
            <h2>Description : </h2>
            <p>{property.description}</p>
      </div>
    );
  }