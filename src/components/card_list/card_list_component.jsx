import React from 'react';
import { Card } from '../card/card_component';
import './card_list.css';

export const CardList = props => {
    return (
        <div className="card_list">
            {props.monsters.map(monter => (<Card key={monter.id} monter={monter} />))}
        </div>
    );
}