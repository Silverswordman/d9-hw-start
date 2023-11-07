// qui dichiaro il reducer
// la funzione PURA ( da stesso input ottengo sempre lo stesso output)
// generare un nuovo stato ogni volta che viene "dispatchata" un azione

import { FAV, REMOVE } from "../actions";

const initialState = {
  list: [],
};

// const initialState = {
//   favorites: {
//     content: [],
//   },
// se in futuro aggiungi  nuove funzionalità aggiungi una sottofetta dell oggetto ecco perchè il redux store
//diviso in compartimenti in fondo è lo STATO di tutta L APP
// };
// console.log(initialState);

const favReducer =
  // stato è lo stato attuale action è l ultima azioen dispatchata

  (state = initialState, action) => {
    // state all inizio rischia di essere undefined
    // per questo si crea la costante esterna definita di partenza inizializza con un valore di default
    // dentro alla funzione descriviamo la logica del reducer
    // dichiara come il reducer calcolerà il nuovo stato dell app
    // classica forma del reducer è costruirlo con un costrutto SWITCH
    switch (action.type) {
      // ancora non so i casi
      case FAV:
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      case REMOVE:
        return {
          ...state,
          list: [...state.list.filter((job, i) => i !== action.payload)],
        };
      default:
        // se non finiamo in nessuno dei casi switch cosa si fa? si torna allo stato iniziale con il default
        return state;
      // non è lo stato iniziale ma lo stato precedente, come ci è arrivato

      // sempre il caso di default
      // payload per aggiungere qualcosa di un certo dato.
    }
  };
export default favReducer;
