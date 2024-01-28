import React, { useState } from "react";
import cardArray from "./Data";
import "./Cards.css";

const Cards = ({sumarPuntuacion, sumarIntentos}) => {
  //variable de estado con los datos de las tarjetas
  const [cards, setCards] = useState(cardArray);
  let clickadas = [];
  

  //comprobar las tarjetas
  const checkCard = (ev, card) => {
    //hacer que la tarjeta se gire al clicar
    ev.currentTarget.classList.toggle("flip");

    //trackear las tarjetas clicadas, máximo 2
    if (clickadas.length < 2) {
      clickadas.push(card);

      //si se han clicado 2 tarjetas Y los planetas son iguales Y los id son diferentes...
      if (clickadas.length===2 && clickadas[0].name === clickadas[1].name && clickadas[0].id !== clickadas[1].id) {
        //cambiar imagen a tick
        const newarray = [...cards].map((card) => {
          if (card.name === clickadas[0].name || card.name === clickadas[1].name) {
            card.img = "./exercise-1/tick.svg";
            console.log(card);
            return card;
          }
          return card;
        });
        setCards(newarray);
        //y añadir 1 a puntuación
        sumarPuntuacion();

        //si has clicado en dos pero no has acertado:
      } else if (clickadas.length===2) {
        //añadir 1 a intentos
        sumarIntentos();
        setTimeout(()=>{
          // ev.currentTarget.classList.toggle("flip");   
        },1000)
      }

      //cuando el array clicadas tenga 2 y ya se hayan hecho todas las comprobaciones, lo reseteamos
      if (clickadas.length === 2) {
        clickadas = [];
      }
    }
  };

  return (
    <div className="b-grid">
      {cards.map((card, i) => (
        <div
          className="card"
          onClick={(e) => {
            checkCard(e, card);
          }}
          key={i}
        >
          <img className="front" src={card.img} alt="oli" />
          <img className="reverse" src="exercise-1/universe.svg" alt="oli" />
        </div>
      ))}
    </div>
  );
};

export default Cards;
