import React from "react";
import './card_style.css'

export const Card = props => {

    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monter.id}?set=set2&size=150x150`} alt="monster" />
            <h4 >{props.monter.name}</h4>
            <p>{props.monter.email}</p>
        </div>
    );

}
