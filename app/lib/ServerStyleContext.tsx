import { createContext } from "react";

export interface ServerStyleContextData {
  key: string;
  ids: Array<string>;
  css: string;
}

export default createContext<null | ServerStyleContextData[]>(null);
