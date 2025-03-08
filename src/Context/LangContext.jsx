import { createContext, useState } from "react";


export const LangContext =createContext();

export function LangContextProvider(props) {

    const [lang,setLang]=useState(localStorage.getItem('lang')??'en');
    //const [lang,setLang]=useState('ar');
    const ChangeLang =()=>{
        //lang ==='ar'?setLang('en'):setLang('ar');
        switch (lang) {
            case 'ar':
                localStorage.setItem('lang','en');
                setLang('en')
                break;
        
                case 'en':
                    localStorage.setItem('lang','ar');
                    setLang('ar')
                break;
        }
    }
    
    return <LangContext.Provider value={{lang,ChangeLang}}>
        {props.children}
    </LangContext.Provider>
    
}