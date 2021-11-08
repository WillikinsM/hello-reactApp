import React from "react";
import { InfosStore } from "./infosStore";
import { TableStore } from "./tableStore";

export const stores = Object.freeze({
  infosStore: new InfosStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;

export const tstores = Object.freeze({
  tablestores: new TableStore(),
});

export const tstoresContext = React.createContext(tstores);
export const TStoresProvider = tstoresContext.Provider;
