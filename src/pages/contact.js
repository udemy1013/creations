import React from "react";
import { Grid, Typography, Button, Box, Link, useTheme, useMediaQuery } from "@mui/material";
import phone from "../components/images/phone.png";
import BackButton from "../components/BackButton";
import useLocationChange from '../components/useLocationChange.ts'



function Contact() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "1536px", margin: "auto", alignItems: "flex-end", padding: "0px 24px", width: "100%" }}
      >
        <Grid item md={6} xs={12} className="pr-16-md center-sm">
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
          <p style={{ fontSize: "16px", lineHeight: "31px" }} className="display-md">
            依頼に関しまして、公式LINEにてご相談から受け賜っております。
            <br /> 友達追加していただき、トークからご相談内容をお送りください。
            <br />
            1~2営業日で担当者からご連絡いたします。
          </p>
        </Grid>
        <Grid item md={6} xs={12} sx={{ textAlign: "right" }} className="center-sm">
          <img id="phone" src={phone} width={350} alt="phone" />
        </Grid>
      </Grid>
      <div className="display-sm"> 
      <p style={{ fontSize: "16px", lineHeight: "31px", textAlign: "left"}} className="descrption-mobile">
            依頼に関しまして、公式LINEにてご相談から受け賜っております。
            <br /> 友達追加していただき、トークからご相談内容をお送りください。
            <br />
            1~2営業日で担当者からご連絡いたします。
          </p>
      </div>
      
      <Grid container sx={{mt:3, mb: 5, flexDirection:{md:"row",sm:"column-reverse", xs:"column-reverse"}}} spacing={3}>
        <Grid item md={6} xs={12}>
          <Box  sx={{ textTransform: "uppercase !important", textAlign: {md:"end", xs:"center"} }}>
            <BackButton />
          </Box>
          
        </Grid>
        <Grid item sx={{ textAlign: {md:"start", xs:"center"}}} md={6} xs={12}>
          <Link href="https://lin.ee/J6EdD0f"> 
            <Button variant="outlined" sx={{ textTransform: "uppercase !important", minWidth: {xs:200, md:150} }}>
              GO LINE
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
