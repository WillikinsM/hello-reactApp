import React from "react";
import { stores, storesContext, tstores, tstoresContext } from "./store";

///infos
export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => React.useContext(storesContext)[store];


///tstores
export const useTStores = () => React.useContext(tstoresContext);

export const useTStore = <T extends keyof typeof tstores>(
  tstore: T
): typeof tstores[T] => React.useContext(tstoresContext)[tstore];
