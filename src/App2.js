import React from 'react'
import { SecondContextProvider } from './providers/secondcontext';
import { DataProvider } from './providers/datacontext';
import Child from "../src/components/Child1";
import Child2 from "../src/components/Child2";

const App3 = () => {
    return (
        <SecondContextProvider>

            <DataProvider>
                <Child />
                <Child2 />
            </DataProvider>
            
        </SecondContextProvider>
    )
};



export default App3