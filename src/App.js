import "./App.css";
import "./components/Appbar.js";
import {React, useEffect}  from "react";
import { PageTransition } from '@steveeeie/react-page-transition';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Home from "./pages/home.js";
import AppBar from "./components/Appbar.js";
import Creative from "./pages/creative.js";
import Contact from "./pages/contact";
import Company from "./pages/company.js";
import Tax3 from "./pages/portfolio/tax3.js";
import Bubbic from "./pages/portfolio/bubbic.js";
import HomeMobile from './pages/HomeMobile.js';
import Nasty from "./pages/portfolio/nasty";
import Kusomegane from "./pages/portfolio/kusomegane";
import Ifc from "./pages/portfolio/ifc";
import Luchia from "./pages/portfolio/luchia";
import Wasshoi from "./pages/portfolio/wasshoi";

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <BrowserRouter>
      <AppBar />
      <Route
        render={({ location }) => {
          return (
            !isMobile ? (
              <PageTransition
                preset="scaleUpScaleUp"
                transitionKey={location.pathname}
              >
                <SwitchComponent location={location} isMobile={isMobile} />
              </PageTransition>
            ) : (
              <SwitchComponent location={location} isMobile={isMobile} />
            )
          );
        }}
      />
    </BrowserRouter>
  );
}

const SwitchComponent = ({ location, isMobile }) => (
  <Switch location={location}>
    <Route exact path="/">
      {isMobile ? <HomeMobile /> : <Home />}
    </Route>
    <Route path="/home">
      {isMobile ? <HomeMobile /> : <Home />}
    </Route>
    <Route path="/creative">
      <Creative />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/company">
      <Company />
    </Route>
    <Route path="/portfolio/tax3">
      <Tax3 />
    </Route>
    <Route path="/portfolio/bubbic">
      <Bubbic />
    </Route>
    <Route path="/portfolio/nasty">
      <Nasty />
    </Route>
    <Route path="/portfolio/kusomegane">
      <Kusomegane />
    </Route>
    <Route path="/portfolio/ifc">
      <Ifc />
    </Route>
    <Route path="/portfolio/luchia">
      <Luchia />
    </Route>
    <Route path="/portfolio/wasshoi">
      <Wasshoi />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

function NotFound() {
  return <h2>Not Found Page</h2>;
}

export default App;
