import React, { useEffect } from "react";
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
        <Chat />
      </div>
    </Provider>
  );
};

export default App;
