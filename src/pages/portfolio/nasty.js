import { Divider ,Box, Typography, Container, Link } from '@mui/material'
import {React, useEffect} from 'react'
import nastyImg1 from "../../components/images/nasty_1.png"
import nastyImg2 from "../../components/images/nasty_2.png"
import nastyGif from "../../components/images/nasty.gif"
import BackButton from '../../components/BackButton'
import useLocationChange from '../../components/useLocationChange.ts'



const Nasty = () => {

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
    sx={{ maxWidth: "820px !important", margin: "auto", alignItems: "flex-end", letterSpacing: "0.18em", mt: 5, p:"24px" , pr:"0 !important", pl:"0 !important" }}>
        
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem"
  }}
>
  <Link
    href="bubbic"
    sx={{
      fontFamily: "Kanit",
      fontWeight: 600,
      textDecoration: "none",
      color: "#333333",
      fontSize: { xs: "12px", md: 16 },
      whiteSpace: {xs:"nowrap"}
    }}
  >
    {"<"} Prev
  </Link>
  <Typography
    variant="p"
    color="initial"
    sx={{ fontFamily: "Inter", fontWeight: 600,  fontSize: { xs: "12px", md: 16 }, textAlign: {xs:"center"} }}
  >
    KANSAICOLLECTION 2023 spring&summer / nastydog
  </Typography>
  <Link
    href="kusomegane"
    sx={{
      fontFamily: "Kanit",
      fontWeight: 600,
      textDecoration: "none",
      color: "#333333",
      fontSize: { xs: "12px", md: 16 },
      whiteSpace: {xs:"nowrap"}
    }}
  >
    Next {">"}
  </Link>
</div>

        <Box sx={{textAlign: "center"}}>
            <Box component="img" src={nastyImg1}/>
            <Box sx={{mt: 2}} component="img" src={nastyImg2}/>
            <Box sx={{mt: 2}} component="img" src={nastyGif}/>
        </Box>
        <Divider sx={{mt: 5, mb: 5, backgroundColor: "black"}}/>
        <Box sx={{margin: {xs: "0 20px"}}}>        
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
        KANSAICOLLECTION<br/>
        2023 spring&summer<br/>
        nastydog
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
      ><br />
        DESIGN CONSULTING
        <br /><br />
        ・3D design
        <br />
        ・loop movie
      </Typography>
        <Box sx={{mt: 3, textAlign: "center"}}>
            <BackButton/>
        </Box>
        </Box>
    </Container>
    
  )
}

export default Nasty