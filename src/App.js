import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import Newsletter from "./components/general/Newsletter";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Provider as ReduxProvider } from 'react-redux'
import store from "./redux/store";

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <Router>
          <Header />
          <Switch>
            <Router exact path="/">
              <Homepage />
            </Router>
          </Switch>
          <Newsletter />
          <Footer />
        </Router>
      </ReduxProvider>
    </>
  );
};

export default App;
