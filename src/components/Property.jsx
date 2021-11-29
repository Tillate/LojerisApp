import React from 'react';
import "../styles/property.css"


export default function CardProperty(props) {
    const { properties, showDetails } = props;
  
    const propertiesJsx = properties.map((property) => (
        <div key={property.id} className="propCard">
          <img
            className="imgBiens"
            src={"http://lojeris.api.pierre-jehan.com/uploads/" + property.picture.filePath}
            alt="imgBiens"
          />
          <div className="containerTitle">
            <p className="texteBiens">
                {property.category.name} - {property.district.name}
            </p>
            <button onClick={() => showDetails(property)}>En savoir plus</button>
          </div>
        </div>
      ));
  
    return (
        <div className="containerProp">
            {propertiesJsx}
        </div>
    );
  }