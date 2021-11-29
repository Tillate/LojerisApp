import React, { useState, useEffect} from "react";
import CardProperty from "../components/Property";
import DetailProperty from "../components/PropertyDetails";
import "../styles/home.css"



export default function Home() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch("http://lojeris.api.pierre-jehan.com/properties")
        .then((response) => response.json())
        .then((data) => setProperties(data["hydra:member"]))
        .catch((error) => console.log(error));
    }, []);

    const [detailsProperty, setDetailsProperty] = useState([]);

    function showDetails(property) {
        setDetailsProperty(property);
    }


    return (
        <div>
          <h1 className="title">Découvrez nos dernières propriétés</h1>
          <div className="containerCardInfo">
            <CardProperty properties={properties} showDetails={(p) => showDetails(p)} />
            <DetailProperty property={detailsProperty} />
          </div>
        </div>
      );
};
