import React, {useState, useEffect}from "react";
import { Grid, Typography, Button } from "@mui/material";
import mark from "../components/images/color_mark.png";
import BackButton from "../components/BackButton";
import useLocationChange from "../components/useLocationChange.ts";

const Company = () => {

  const [iframeHeight, setIframeHeight] = useState('450');

  useEffect(() => {
    // Function to update iframe height based on window size
    const updateHeight = () => {
        if(window.innerWidth <= 600) {  // Check if window width is less than or equal to 600px
            setIframeHeight('300');
        } else {
            setIframeHeight('450');
        }
    };

    // Call function initially to set height based on initial window size
    updateHeight();

    // Set up event listener to update height whenever window is resized
    window.addEventListener('resize', updateHeight);

    // Clean up event listener when component unmounts
    return () => window.removeEventListener('resize', updateHeight);
}, []);

    const leftInfo = [
        '会社名',
        '設立',
        '所在地',
        '代表取締役',
        '事業内容',
        '資本金',
      ];

    const rightInfo = [
        '株式会社ファースト',
        '2017年11月1日',
        '〒541-0058 大阪府大阪市中央区南久宝寺町4丁目3-2 Ｉビル 5F',
        '金沢拓哉',
        'デザイン、制作事業',
        '888万円',
      ];
      
  return (
    <div>
    <Grid
        className="title"
        container
        spacing={5}
        sx={{ maxWidth: "1536px", margin: "auto", mt: 5, padding: "0 24px" ,  justifyContent: "end",  width: "100%" }}
      >
         <Typography
          variant="h1"
          sx={{
            fontSize: "64px",
            fontWeight: "600",
            color: "#443538",
            fontFamily: "Lexend",
            mb: 1,
            marginRight: {xs:0, md:"40px"}
          }}
          className="title"
        >
          company
        </Typography>
      </Grid>
         
      <Grid
        container
        spacing={5}
        sx={{ maxWidth: "1536px", margin: "auto", padding: "0 24px", justifyContent: "space-between"  ,width: "100%" }}
      >
        
        <Grid item lg={4} xs={12} sx={{ textAlign: "left", pt:0,  "@media screen and (max-width:1200px)": {
       paddingRight: "40px"
    }}}>
          <div className="relative">
            <iframe
              iframe
              class="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.844032497342!2d135.49889415238556!3d34.67877182929758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e762a11bc5d9%3A0xe303035d718d5381!2z5qCq5byP5Lya56S-44OV44Kh44O844K544OI!5e0!3m2!1sja!2sjp!4v1682390748428!5m2!1sja!2sjp"
              width="600"
              height={iframeHeight}
              style={{ border: "0;" }}
              allowfullscreen=""
              loading="eager"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="center">MAP</p>
            <img id="company-mark" className="just-absolute" src={mark} />
          </div>
        </Grid>
        <Grid item lg={7} xs={12} sx={{ textAlign: "left", pl: 5 , pt:0, marginRight: "40px"}}>

          <div>
          <hr className="line" />
          {leftInfo.map((item, index) => (
                <React.Fragment key={index}>
                <div className="container">
                  <p className="nospace">{item}</p>
                  <p>{rightInfo[index]}</p>
                </div>
                {index !== leftInfo.length - 1 && <hr className="line" />}
                </React.Fragment>
              ))}
              <hr className="line" />
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center", mb:5 }} spacing={3} >
        <Grid item sx={{mt:5 ,mb: 5}}>
         <BackButton/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Company;
