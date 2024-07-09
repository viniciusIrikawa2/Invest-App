'use client';
import { createContext, useState } from "react";
import { IInvestment } from "../@Types/Investment";

const initialState = {
    owner: '',
    creationDate: '',
    initialValue: 0
}
const AppContext = createContext<{
    formData: IInvestment;
    setFormData: React.Dispatch<React.SetStateAction<IInvestment>>;
}>({
    formData: initialState,
    setFormData: () => {},
});

export { AppContext };

export default function Provider({children}: {children: React.ReactNode}){
    
    const [formData, setFormData] = useState<IInvestment>(initialState);

    return(
        <AppContext.Provider value={{ formData, setFormData }}>
            {children}
        </AppContext.Provider>  
    )
};