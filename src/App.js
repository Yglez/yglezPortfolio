import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Work from "./components/Work";
import Error from "./components/Error";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

library.add(fas, fab);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <main id="home">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/work" component={Work} />
                <Route component={Error} />
              </Switch>
              <Contact />
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
