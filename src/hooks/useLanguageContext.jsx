import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext";

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    
    if(!context) {
        throw Error("useLanguageContext does not work");
    }

    return context
}