import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Diary from "./containers/diary";
import Profile from "./containers/profile";
import Settings from "./containers/settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/react-bootstrap/lib"
import Wrapper from "./components/Wrapper";
// import dougnut chart from components/home 
import Doughnutchart from "./components/Doughnutchart/Doughnutchart";
import {DailyComponent, WeeklyComponent} from "./components/diary";

const App = () => ( 
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Doughnutchart} />
        
        <Route exact path="/diary" component={Diary} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
      </Wrapper>
      <Doughnutchart/>
      <Footer />
    </div>
  </Router>
);

export default App;
