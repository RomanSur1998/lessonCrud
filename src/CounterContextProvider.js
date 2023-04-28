import React, { createContext, useState } from 'react'
export const counterContext = createContext();

const CounterContextProvider = ({children}) => {
    const [counter, setCounter]=useState(0)
    function increment  () {
        setCounter(counter+1)
    }
    function dicrement  () {
        setCounter(counter-1)
    }
  return (
    
    <counterContext.Provider value={{counter, increment, dicrement}}>{children}</counterContext.Provider>
  )
}

export default CounterContextProvider