import { createContext, useContext } from "react";

export const favMessageContext = createContext("This is my context!!!");

export const useFavMessage = () => {
    return useContext(favMessageContext);
};

export const favMessageProvider = (props) => {
    <favMessageContext.Provider>
        {props.children}
    </favMessageContext.Provider>
}