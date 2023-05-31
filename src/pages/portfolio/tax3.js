import { Divider ,Box, Typography, Container, Link } from '@mui/material'
import {React, useEffect} from 'react'
import tax3Img1 from "../../components/images/tax3_1.png"
import tax3Img2 from "../../components/images/tax3_2.png"
import tax3Img3 from "../../components/images/tax3_3.png"
import tax3Img4 from "../../components/images/tax3_4.png"
import tax3Gif from "../../components/images/tax3.gif"
import tax3logo from "../../components/images/tax3_logo.png"
import BackButton from '../../components/BackButton'
import useLocationChange from '../../components/useLocationChange.ts'



const Tax3 = () => {

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
  <Typography
    variant="p"
    color="initial"
    sx={{
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: { xs: "12px", md: 16 },
    }}
  >
    暗号資産専門税理士サービス/TAX3.0
  </Typography>
  <Link
    href="bubbic"
    sx={{
      fontFamily: "Kanit",
      fontWeight: 600,
      textDecoration: "none",
      color: "#333333",
      fontSize: { xs: "12px", md: 16 },
    }}
  >
    Next {">"}
  </Link>
</div>
        <Box sx={{textAlign: "center"}}>
            <Box component="img" src={tax3Img1}/>
            <Box sx={{mt: 2}} component="img" src={tax3Img2}/>
            <Box sx={{mt: 2}} component="img" src={tax3Img3}/>
            <Box sx={{mt: 2}} component="img" src={tax3Img4}/>
            <Box sx={{mt: 2}} component="img" src={tax3Gif}/>
            <Box sx={{mt: 2}} component="img" src={tax3logo}/>
        </Box>
        <Divider sx={{mt: 5, mb: 5, backgroundColor: "black"}}/>
        
        <Box sx={{margin: {xs: "0 20px"}}}>        
        <Typography variant="p" color="initial" sx={{display: "block", fontFamily: "Inter", fontWeight: 400, fontSize: "14px"}}>暗号資産専門税理士サービス/TAX3.0</Typography>
        <Typography variant="p" color="initial" sx={{display: "block", fontFamily: "Inter", fontWeight: 400, fontSize: "14px"}}><br/><br/>・Logo design<br/>
・Landing page design<br/>・mascot character 3D design</Typography>
        <Typography variant="p" color="initial" sx={{display: "block", fontFamily: "Inter", fontWeight: 400, fontSize: "14px"}}><br/>Link</Typography>
        <Link href="https://tax-3.jp/" sx={{color: 'gray'}}>https://tax-3.jp/</Link>
        <Box sx={{mt: 3, textAlign: "center"}}>
            <BackButton/>
        </Box>
        </Box>
    </Container>
    
  )
}

export default Tax3