import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// qui "inietto" lo stato motore di redux dai file index in reducer e in store

import store from "./redux/store";

import { Provider } from "react-redux"; // componente che unisce react e redux

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // provider è un componente della libreria react-redux circonda app e ha come prop lo store ovvero il risultato di un configurestore()
  // inietta in app tutta la logica del redux store
  <Provider store={store}>
    <App />
  </Provider>
);

// qualche componente dovrà leggere e qualcuno scrivere
// connettere i componenti ci consente degli hooks
// useSelector()  x leggere i valori
// useDispatch() x dispatchare valori
