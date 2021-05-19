import React from "react";
import NavBar from "./components/Navbar/index";
import Home from "./components/Home/index";
import Background from "./components/Background/index";
import Contact from "./components/Contact/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio/index"
import Footer from "./components/Footer/index"


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div>
          <Background />
          <Switch>
            <>
              <Route
                exact
                path={[
                  "/",
                  "/home",
                  "/react-profile/",
                  "/react-profile/home",
                ]}
              >
                <Home />
              </Route>
              <Route path={["/portfolio", "/react-profile/portfolio"]}>
                <Portfolio />
              </Route>
              <Route path={["/contact", "/react-profile/contact"]}>
                <Contact />
              </Route>
            </>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
