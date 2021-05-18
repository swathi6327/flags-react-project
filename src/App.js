import React, { useState, useEffect } from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./components/Reducer";
import ActionList from "./components/ActionList";
import Header from "./components/Header";
import CountryPage from "./components/CountryPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: "",
};

const store = createStore(Reducer, initialState);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [, setChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);

  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route path="/">
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
