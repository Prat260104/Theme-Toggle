import { useContext,createContext } from "react";

export const Themecontext=createContext({   //default value daali ja sakti h variable method dono de sakte h
    thememode: 'light',
    lighttheme: ()=>{},
    darktheme : ()=>{}
}) 

export const Themeprovider = Themecontext.Provider

export default function useTheme (){
    return useContext(Themecontext)  
}
