import { createContext } from "react";

export const SecondContext = createContext();

export const SecondContextProvider = ({ children }) => { 
    const student = {
        name: 'Niraj',
        age: 22
    }
    return (
        <SecondContext.Provider value={student}>
            {children}
        </SecondContext.Provider>
    )
}
