import React, { useState, useEffect, useRef } from "react";
import { Slider, Button, Grid } from "@mui/material";
import { images } from "../data/images";

const AUTO_INTERVAL_MS = 1;

function Home() {
  const [value, setValue] = useState(100);
  const [isAuto, setIsAuto] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [top, setTop] = useState(80);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <header className="App-header">
        <div
          style={{
            position: "absolute",
            height: "900px",
            width: "80%",
            overflow: "hidden",
            top: "-10%",
            transform: " transform: translateY(-50%)",
          }}
        >
          <div
            className="absolute"
            style={{
              top: `calc(${top}% + ${value}% - 80% )`,
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              width: "70%",
            }}
          >
            <Grid container spacing={2}>
              {images.map((src, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <img
                    className="dropshadow"
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "90%",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          orientation="vertical"
          value={value}
          onChange={handleSliderChange}
          disabled={!isAuto}
          className="slider"
          style={{
            position: "absolute",
            right: "10%",
            top: "30%",
            transform: "translateY(-50%)",
            color: "#443538",
            height: "350px",
          }} // 修正: スライダーのスタイルを調整
        />
      </header>
    </div>
  );
}

export default Home;
