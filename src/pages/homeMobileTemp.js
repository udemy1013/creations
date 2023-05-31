import {React} from 'react'
import imgSample from "../components/images/main_tax3.png";
import imgSample1 from "../components/images/main_bubbic.png";
import imgSample2 from "../components/images/main_tax3.png";
import imgSample3 from "../components/images/main_bubbic.png";
import shadowImg from "../components/images/shadow.png";
import { Link } from "react-router-dom";

function homemobile  () {
       const portfolios = ["tax3", "bubbic"];
    const images = [imgSample, imgSample1, imgSample2, imgSample3];
  return (
        <div className="slider-container">
            <ul
              className="slider-images"
              style={{
                listStyleType: "none",
              }}
            >
              {images.map((src, index) => (
                <li
                  key={index}
                  className="slider-image"
                  style={{ margin: "0px 16px" }}
                >
                  <Link to={"/portfolio/" + portfolios[index]}> 
                  <img
                    className="dropshadow"
                    src={src}
                    alt={`Slide ${index + 1}`}
                  />
                  <img alt={"shadow"} className="shadowImg" src={shadowImg} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default homemobile