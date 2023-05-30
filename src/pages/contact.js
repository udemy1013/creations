import React, {useEffect} from "react";
import { Grid, Typography, Button, Box, Link } from "@mui/material";
import phone from "../components/images/phone.png";
import BackButton from "../components/BackButton";
import useLocationChange from '../components/useLocationChange.ts'

function Contact() {

  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const rootElement = document.getElementById("root");

    const prevHtmlOverflow = htmlElement.style.overflow;
    const prevBodyOverflow = bodyElement.style.overflow;
    const prevRootOverflow = rootElement ? rootElement.style.overflow : null;

    
    const updateOverflow = () => {
      const overflowValue = window.innerWidth <= 1200 ? "visible" : "hidden";
      htmlElement.style.overflow = overflowValue;
      bodyElement.style.overflow = overflowValue;
      if (rootElement) {
        rootElement.style.overflow = overflowValue;
      }
    };

    updateOverflow(); // 初期設定
    window.addEventListener("resize", updateOverflow); // ウィンドウサイズが変わったときに更新

    // ComponentWillUnmountの代わりとして
    return () => {
      htmlElement.style.overflow = prevHtmlOverflow;
      bodyElement.style.overflow = prevBodyOverflow;
      if (rootElement) {
        rootElement.style.overflow = prevRootOverflow;
      }
      window.removeEventListener("resize", updateOverflow); // リスナーの削除
    };
  }, []); // 空配列を依存性リストとして渡すことで一度だけ実行する

  useLocationChange((location) => {
    const removeOverflowHidden = (className) => {
        const elements = document.getElementsByClassName(className);
  
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.overflow = 'visible';
        }
      };
  
      removeOverflowHidden('sc-beqWaB hPGFqH');
      removeOverflowHidden('sc-gueYoa xAJSw');
  })


  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "1536px", margin: "auto", alignItems: "flex-end", padding: "0px 24px" }}
        className="div-center-md"
      >
        <Grid item md={6} xs={12} className="pr-16-md">
          <Typography
            variant="h1"
            sx={{
              fontSize: "64px",
              fontWeight: "600",
              color: "#443538",
              fontFamily: "Lexend",
            }}
            className="title"
          >
            contact
          </Typography>
          <p style={{ fontSize: "16px", lineHeight: "31px" }} className="desktop">
            依頼に関しまして、公式LINEにてご相談から受け賜っております。
            <br /> 友達追加していただき、トークからご相談内容をお送りください。
            <br />
            1~2営業日で担当者からご連絡いたします。
          </p>
        </Grid>
        <Grid item md={6} xs={12} sx={{ textAlign: "right" }} className="div-center-md">
          <img src={phone} width={"350px"} />
        </Grid>
      </Grid>
      <div className="mobile"> 
      <p style={{ fontSize: "16px", lineHeight: "31px", textAlign: "left"}} className="descrption-mobile">
            依頼に関しまして、公式LINEにてご相談から受け賜っております。
            <br /> 友達追加していただき、トークからご相談内容をお送りください。
            <br />
            1~2営業日で担当者からご連絡いたします。
          </p>
      </div>
      
      <Grid container sx={{ justifyContent: "center",  }} spacing={3}>
        <Grid item>
          <Box  sx={{ textTransform: "uppercase !important" }}>
            <BackButton />
          </Box>
          
        </Grid>
        <Grid item>
          <Link href="https://lin.ee/J6EdD0f"> 
            <Button variant="outlined" sx={{ mt: 3, textTransform: "uppercase !important" }}>
              GO LINE
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
