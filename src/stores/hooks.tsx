import React from "react";
import {
  mstores,
  mstoresContext,
  stores,
  storesContext,
  tstores,
  tstoresContext,
} from "./store";

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

///mstores
export const useMStores = () => React.useContext(mstoresContext);

export const useMStore = <T extends keyof typeof mstores>(
  mstore: T
): typeof mstores[T] => React.useContext(mstoresContext)[mstore];
