import { createContext, useContext } from "react";
import VinCode from "../store";

export const ModelContext = createContext<VinCode | null>(null);

export const useModel = () => {
  const context = useContext(ModelContext);
  return context;
};
