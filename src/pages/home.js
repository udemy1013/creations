import React, { useState, useEffect, useRef } from "react";
import { Slider, Button } from "@mui/material";


import imgSample from "../components/images/main_tax3.png";
import imgSample1 from "../components/images/main_bubbic.png";
import imgSample2 from "../components/images/main_tax3.png";
import imgSample3 from "../components/images/main_bubbic.png";
import shadowImg from "../components/images/shadow.png";

const AUTO_INTERVAL_MS = 1;

function Home(){
    const [value, setValue] = useState(0);
    const [isAuto, setIsAuto] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [left, setLeft] = useState(30);
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
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
            const newValue = (prevValue + 0.01) % 100;
            if (newValue === 0) {
              setIsAuto(false);
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
  
    const handleSliderDragStart = () => {
      setIsAuto(false);
    };
  
    const intervalOn = () => {
      clearInterval(autoIntervalRef.current);
      setIsAuto(true);
      autoIntervalRef.current = setInterval(() => {
        setValue((prevValue) => (prevValue + 0.01) % 100);
      }, AUTO_INTERVAL_MS);
    };
  
    const intervalOff = () => {
      setClicked(true);
      clearInterval(autoIntervalRef.current);
    };
  
    const handleSliderDragEnd = () => {
      intervalOn();
    };
  
    const images = [imgSample, imgSample1, imgSample2, imgSample3];
    return(
      <div>
         <header className="App-header">
          <div
            className="absolute"
            style={{ left: `calc(${left}% - ${value}%)` }}
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
                    <img
                      className="dropshadow"
                      src={src}
                      alt={`Slide ${index + 1}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                      style={{
                        transform: `translateY(${hoveredIndex === index ? "12px" : "0"})`, // ホバーされたらY軸方向に10px移動
                        transition: "transform 0.3s ease-out",
                      }}
                    />
                    <img alt={"shadow"} className="shadowImg" src={shadowImg} />
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
            onDragStart={handleSliderDragStart}
            onDragEnd={handleSliderDragEnd}
            disabled={!isAuto}
            className="slider"
            style={{
              width: "50%",
              position: "relative",
              marginTop: "650px",
              color: "#443538",
            }} // 修正: スライダーのスタイルを調整
          />
          <Button variant="outlined" sx={{ mt: 5 }}>
            more
          </Button>
        </header>
      </div>
    )
  }

export default Home