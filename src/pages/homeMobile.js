import {React} from 'react'
import imageData from '../data/home_images.json';
import shadowImg from "../components/images/shadow.png";
import { Link } from "react-router-dom";

function Homemobile  () {
  const portfolios = ["tax3", "bubbic", "nasty", "kusomegane"];
    const images = imageData.projects.map(project => require(`../components/images/${project.image}`));
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
                    width={"100%"}
                  />
                  <img alt={"shadow"} className="shadowImg" src={shadowImg} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default Homemobile