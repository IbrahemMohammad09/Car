import {createContext, useReducer} from "react";

export const LanguageContext = createContext();

const LanguageReducer = (state, action) => {
    console.log(action.type);
    switch(action.type) {
        case "AR": 
            localStorage.setItem('language', 'AR');
            return {
                language: action.type
            };
        case "EN":
            localStorage.setItem('language', 'EN');
            return {
                language: action.type
            };
        default: 
            localStorage.setItem('language', 'EN');
            return {
                language: action.type
            };
    }
}

export const LanguageContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LanguageReducer, {
        language: localStorage.getItem('language')? localStorage.getItem('language'): 'EN'
    })

    return (
        <LanguageContext.Provider value={{...state, dispatch}}>
            { children }
        </LanguageContext.Provider>
    );
}