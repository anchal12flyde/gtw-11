"use client"; // if you intend to use client-side interactivity

import React from "react";

const AnimatedCards = ({ cards }) => {
  return (
    <section className="card-section">
      {cards.map((card, idx) => (
        <div key={idx} className="card">
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          <div className="card-footer">
            {card.action}
            <img
              src="/images/assets/arrow.png"
              alt="arrow"
              style={{
                width: "40px",
                marginLeft: "4px",
                verticalAlign: "middle",
              }}
            />
          </div>
          <div className="card-overlay">
            <div className="overlay-content">
              <h3 className="card-action">{card.action}</h3>
             <ul className="list-disc pl-5">
              {card.overlayItems?.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AnimatedCards;
