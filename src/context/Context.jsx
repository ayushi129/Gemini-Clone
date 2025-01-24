import { createContext } from "react";

export const Context = createContext();

const contextProvider = (props) => {

    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}