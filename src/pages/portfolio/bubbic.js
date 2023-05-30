import { Divider, Box, Typography, Container, Link, Grid } from "@mui/material";
import { React, useEffect } from "react";
import bubbicImg1 from "../../components/images/bubbic_1.png";
import bubbicImg2 from "../../components/images/bubbic_2.png";
import bubbicImg3 from "../../components/images/bubbic_3.png";
import bubbicImg4 from "../../components/images/bubbic_4.png";
import bubbiclogo from "../../components/images/bubbic_logo.png";
import BackButton from "../../components/BackButton";
import useLocationChange from "../../components/useLocationChange.ts";

const Bubbic = () => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const rootElement = document.getElementById("root");

    const prevHtmlOverflow = htmlElement.style.overflow;
    const prevBodyOverflow = bodyElement.style.overflow;
    const prevRootOverflow = rootElement ? rootElement.style.overflow : null;

    htmlElement.style.overflow = "visible";
    bodyElement.style.overflow = "visible";
    if (rootElement) {
      rootElement.style.overflow = "visible";
    }

    // ComponentWillUnmountの代わりとして
    return () => {
      htmlElement.style.overflow = prevHtmlOverflow;
      bodyElement.style.overflow = prevBodyOverflow;
      if (rootElement) {
        rootElement.style.overflow = prevRootOverflow;
      }
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
    <Container
      sx={{
        maxWidth: "820px !important",
        margin: "auto",
        alignItems: "flex-end",
        padding: "24px",
        letterSpacing: "0.18em",
        mt: 5,
        pr: "0 !important",
        pl: "0 !important",
      }}
    >
      <Typography
        variant="p"
        color="initial"
        sx={{ fontFamily: "Inter", fontWeight: 600 }}
      >
        オリジナルシャンパンブランド/Bubbic
      </Typography>
      <Link
        href="bubbic"
        sx={{
          float: "right",
          fontFamily: "Kanit",
          fontWeight: 600,
          textDecoration: "none",
          color: "#333333",
        }}
      >
        Next {">"}{" "}
      </Link>
      <Link
        href="tax3"
        sx={{
          float: "right",
          fontFamily: "Kanit",
          fontWeight: 600,
          mr: 3,
          textDecoration: "none",
          color: "#333333",
        }}
      >
        {" "}
        {"<"} Prev
      </Link>

      <Box sx={{ textAlign: "center" }}>
        <Box component="img" src={bubbicImg1} />
        <Box sx={{ mt: 2 }} component="img" src={bubbicImg2} />
        <Box sx={{ mt: 2 }} component="img" src={bubbicImg3} />
        <Box sx={{ mt: 2 }} component="img" src={bubbicImg4} />
        <Box sx={{ mt: 2 }} component="img" src={bubbiclogo} />
      </Box>
      <Divider sx={{ mt: 5, mb: 5, backgroundColor: "black" }} />
      <Typography
        variant="p"
        color="initial"
        sx={{
          display: "block",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "14px",
        }}
      >
        オリジナルシャンパンブランド/Bubbic
      </Typography>
      <Typography
        variant="p"
        color="initial"
        sx={{
          display: "block",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "14px",
        }}
      >
        <br />
        <br />
        ・Logo design
        <br />
        ・Landing page design
        <br />
        ・label design
        <br />
        ・Instagram feed design
        <br />
        ・LINE@ design
      </Typography>
      <Typography
        variant="p"
        color="initial"
        sx={{
          display: "block",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "14px",
        }}
      >
        <br />
        Link
      </Typography>
      <Link href="https://bubbic.com/" sx={{ color: "gray" }}>
        https://bubbic.com/
      </Link>
      <div>
        <BackButton />
      </div>
    </Container>
  );
};

export default Bubbic;
