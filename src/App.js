
import "./App.css";
import "./components/Appbar.js";
import React  from "react";
import { PageTransition } from '@steveeeie/react-page-transition';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home.js";
import AppBar from "./components/Appbar.js";
import Creative from "./pages/creative.js";



function App() {

  return (
    <BrowserRouter>
     <AppBar/>
     <Route
        render={({ location }) => {
          return (
        
            <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
     
      <Switch location={location}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
      </PageTransition>
      );
    }}
  />

    </BrowserRouter>
  );
}





function Contact(){
  return(
    <div className="App-header">
      <h1>Contact</h1>
    </div>
  )
}

function Company(){
  return(
    <div className="App-header">
      <h1>Company</h1>
    </div>
  )
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}

export default App;
