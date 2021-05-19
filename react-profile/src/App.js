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
                  "/react_profile_np/",
                  "/react_profile_np/home",
                ]}
              >
                <Home />
              </Route>
              <Route path={["/portfolio", "/react_profile_np/portfolio"]}>
                <Portfolio />
              </Route>
              <Route path={["/contact", "/react_profile_np/contact"]}>
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
