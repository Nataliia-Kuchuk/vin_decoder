import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModelContext } from "./context/mobx";
import VinCode from "./store";
import VinService from "./service/vinService";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ModelContext.Provider value={new VinCode(null, null, null, new VinService() )}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ModelContext.Provider>
);
