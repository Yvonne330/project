"use client"
import { createContext, useState } from "react";
export const CounterContext = createContext();
export default function Counter({children}) {
  var [cartlist, setCartlist] = useState([]);
  return (
    <CounterContext.Provider value={{ cartlist, setCartlist }}>
      {children}
    </CounterContext.Provider>
  );
}
