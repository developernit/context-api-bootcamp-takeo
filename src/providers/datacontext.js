import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const data = {
    name: 'John',
    age: 40,
    }
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

