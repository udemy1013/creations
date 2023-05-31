import React, { useState, useEffect } from "react";
import { Slider, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { images } from "../data/creative_images";

function Creative() {
  const [value, setValue] = useState(100);
  const [targetValue, setTargetValue] = useState(100);
  const [top, setTop] = useState(80);

  

  // ポートフォリオページ用の名前
  const portfolio = ["tax3", "bubbic", "nasty", "kusomegane", "ifc", "luchia", "wasshoi"]

  useEffect(() => {
    const handleWheel = (e) => {
      setTargetValue((targetValue) => targetValue - e.deltaY / 30);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div>
      <header className="App-header">
        <div
          style={{
            position: "absolute",
            height: "900px",
            width: "80%",
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
                  <Link to={`/portfolio/${portfolio[index]}`}>
                    <img
                      className="dropshadow"
                      src={src}
                      alt={`Slide ${index + 1}`}
                      style={{
                        width: "90%",
                      }}
                    />
                  </Link>
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
          onChange={(e, newValue) => {
            setValue(newValue);
            setTargetValue(newValue); // Add this line
          }}
          className="slider"
          style={{
            position: "absolute",
            right: "10%",
            top: "30%",
            transform: "translateY(-50%)",
            color: "#443538",
            height: "350px",
          }}
        />
      </header>
    </div>
  );
}

export default Creative;
