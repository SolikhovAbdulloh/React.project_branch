import React from 'react'
import { Outlet } from 'react-router-dom'
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ch_1 from "../imeges/ch_1.png"
import ch_2 from "../imeges/ch_2.png"
import ch_3 from "../imeges/ch_3.png";
function Catalog() {
  return (
    <div className="column">
      <div>
        <div className="logo_1">
          <span>Logo</span>
        </div>
        <div className="title">
          <div className='buttons'>
            <div>
            <p>California Gold Nutrition</p>
            </div>

            <div className='btn'>
              <span>
                <FaHeart />
              </span>
              <span>
                <RiCustomerServiceFill />
              </span>
              <span>
                <FaShareAlt />
              </span>
            </div>
          </div>
          <div className="job_time">
            <a>Подробнее</a>
            <a>Режим работы</a>
          </div>
          <div className="icons">
            <span className="a">
              <img src={ch_1} alt="" /> Популярный
            </span>
            <span className="b">
              <img src={ch_2} alt="" /> 5.0
            </span>
            <span className="c">
              <img src={ch_3} alt="" />
              20 000 сум
            </span>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Catalog