import React from 'react'
import r_1 from "../imeges/rasm1.png"
import { BsArrowUpRight } from "react-icons/bs";

function Cards_Second() {
  return (
    <div className="cardlar">
      <h3>Товары продавца</h3>

      <div className="grid">
      
        
        <div className="card_item">
          <img src={r_1} alt="rasm bor" />
          <p className="gold">California Gold Nutrition</p>
          <h4>California Gold Nutrition Gold C, 1000 мг</h4>
          <p>
            33 860 сум{" "}
            <span>
              <BsArrowUpRight />
            </span>
          </p>
        </div>
        <div className="card_item">
          <img src={r_1} alt="rasm bor" />
          <p className="gold">California Gold Nutrition</p>
          <h4>California Gold Nutrition Gold C, 1000 мг</h4>
          <p>
            33 860 сум{" "}
            <span>
              <BsArrowUpRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards_Second