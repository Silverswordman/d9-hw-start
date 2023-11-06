// qui dichiaro il reducer
// la funzione PURA ( da stesso input ottengo sempre lo stesso output)
// generare un nuovo stato ogni volta che viene "dispatchata" un azione

const initialState = {
  favourites: {
    list: [],
  },
  // se in futuro aggiungi  nuove funzionalità aggiungi una sottofetta dell oggetto ecco perchè il redux store
  //diviso in compartimenti in fondo è lo STATO di tutta L APP
};

const mainReducer =
  // stato è lo stato attuale action è l ultima azioen dispatchata

  (state = initialState, action) => {
    // state all inizio rischia di essere undefined
    // per questo si crea la costante esterna definita di partenza inizializza con un valore di default
    // dentro alla funzione descriviamo la logica del reducer
  };
