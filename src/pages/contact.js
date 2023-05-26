import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import phone from "../components/images/phone.png";
import BackButton from "../components/BackButton";

function contact() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "1536px", margin: "auto", alignItems: "flex-end" }}
      >
        <Grid item lg={6} xs={12}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "64px",
              fontWeight: "600",
              color: "#443538",
              fontFamily: "Lexend",
            }}
          >
            contact
          </Typography>
          <p style={{ fontSize: "16px", lineHeight: "31px" }}>
            依頼に関しまして、公式LINEにてご相談から受け賜っております。
            <br /> 友達追加していただき、トークからご相談内容をお送りください。
            <br />
            1~2営業日で担当者からご連絡いたします。
          </p>
        </Grid>
        <Grid item lg={6} xs={12} sx={{ textAlign: "right" }}>
          <img src={phone} width={"350px"} />
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: "center" }} spacing={3}>
        <Grid item>
          <Box  sx={{ textTransform: "uppercase !important" }}>
            <BackButton />
          </Box>
          
        </Grid>
        <Grid item>
          <Button variant="outlined" sx={{ mt: 3, textTransform: "uppercase !important" }}>
            GO LINE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default contact;
