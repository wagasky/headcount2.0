import React, { Component } from 'react';
import propTypes, { object, func, string } from 'prop-types'
import Card from '../Card/Card'
import './CardDisplay.css';

const CardDisplay = ({ cards, compareCard, selected }) => {

  const cardKeys = Object.keys(cards)
  const renderedCards = cardKeys.map( key => { 
    let highlight
    if (key === selected.card1 || key === selected.card2) {
      highlight = true
    }

    return ( <Card key={cards[key].location} card={cards[key]} clickHandler={compareCard} highlight={highlight}/> )
  })

  return (
    <div className="card-display"> 
      { renderedCards }
    </div>
  );

}

CardDisplay.propTypes = {
  card: propTypes.oneOfType([propTypes.string, propTypes.object]),
  clickHandler: func,
  selected: func
}

export default CardDisplay;
