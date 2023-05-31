import React, { useState, useEffect, useRef } from "react";
import { Slider, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import imageData from '../data/home_images.json';

import shadowImg from "../components/images/shadow.png";
import { Link } from "react-router-dom";

const AUTO_INTERVAL_MS = 20;

function Home() {
  const [value, setValue] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [left, setLeft] = useState(30);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const portfolios = ["tax3", "bubbic", "nasty", "kusomegane", "ifc", "luchia", "wasshoi"];

  

  

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const autoIntervalRef = useRef(null);

  useEffect(() => {
    if (isAuto) {
      autoIntervalRef.current = setInterval(() => {
        setValue((prevValue) => {
          const newValue = prevValue + 0.06;
          if (newValue >= 100) {
            return prevValue;
          }
          return newValue;
        });
      }, AUTO_INTERVAL_MS);
    } else {
      clearInterval(autoIntervalRef.current);
    }
  
    return () => clearInterval(autoIntervalRef.current);
  }, [isAuto]);

  useEffect(() => {
    function handleWindowMouseUp() {
      if (clicked) {
        intervalOn();
        setClicked(false);
      }
    }
    window.addEventListener("mouseup", handleWindowMouseUp);
    return () => window.removeEventListener("mouseup", handleWindowMouseUp);
  }, [clicked]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const intervalOn = () => {
    clearInterval(autoIntervalRef.current);
    setIsAuto(true);
    autoIntervalRef.current = setInterval(() => {
      setValue((prevValue) => {
        const newValue = prevValue + 0.03;
        if (newValue >= 100) {
          return prevValue;
        }
        return newValue;
      });
    }, AUTO_INTERVAL_MS);
  };

  const intervalOff = () => {
    setClicked(true);
    clearInterval(autoIntervalRef.current);
  };

  const images = imageData.projects.map(project => require(`../components/images/${project.image}`));
  return (
    <div>
      <header className="App-header">
      <div
        className="absolute"
        style={{
        left: `calc(${left}% - ${(value / 100) * (images.length - 1) * (550 + 16 * 2)}px)`, // 修正: leftとvalueの計算方法を変更
}}
      >
          <div className="slider-container">
            <ul
              className="slider-images"
              style={{
                width: images.length * 550 + "px",
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
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    style={{
                      transform: `translateY(${
                        hoveredIndex === index ? "6px" : "0"
                      })`, // ホバーされたらY軸方向に10px移動
                      transition: "transform 0.3s ease-out",
                    }}
                  />
                  <img alt={"shadow"} className="shadowImg" src={shadowImg} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Slider
          value={value}
          onChange={handleSliderChange}
          onMouseUp={intervalOn}
          onMouseDown={intervalOff}
          disabled={!isAuto}
          className="slider"
          style={{
            width: "50%",
            position: "relative",
            marginTop: "550px",
            color: "#443538",
          }} // 修正: スライダーのスタイルを調整
        />
        <Link to="creative">
        <Button variant="outlined" sx={{ mt: 5 }}>
          more
        </Button>
        </Link>
       
      </header>
    </div>
  );
}

export default Home;
