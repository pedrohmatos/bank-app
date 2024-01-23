import { ReactNode, createContext, useState } from "react";
import InputType from "../types/InputType";

const localStorageData: string | null = localStorage.getItem("transacao");
const initialExtrato: InputType[] = localStorageData ? JSON.parse(localStorageData) : [];


type ExtratoContextType = {
    extrato: InputType[];
    setExtrato: React.Dispatch<React.SetStateAction<InputType[]>>;
};

export const ExtratoContext= createContext<ExtratoContextType | undefined>(undefined);

type ExtratoProviderProps = {
    children: ReactNode;
};

export const ExtratoProvider = ({ children }: ExtratoProviderProps) => {
    const [extrato, setExtrato] = useState<InputType[]>(initialExtrato);

    const extratoValue = {
        extrato, setExtrato
    };

    return (
        <ExtratoContext.Provider value={extratoValue}>
            {children}
        </ExtratoContext.Provider>
    )
};