import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import Chat from "./components/Chat";

import { createSession } from "./actions/queue";

import axios from "axios";

if (localStorage.session) {
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
} else {
  delete axios.defaults.headers.common["session_id"];
}

const App = () => {
  useEffect(() => {
    if (!localStorage.session) {
      store.dispatch(createSession());
    }
  });
  return (
    <Provider store={store}>
      <div className="App">
        <Loader
          className="loader"
          type="ThreeDots"
          color="#1192e8"
          height={100}
          width={100}
          timeout={3000}
        />
        <Chat />
      </div>
    </Provider>
  );
};

export default App;
