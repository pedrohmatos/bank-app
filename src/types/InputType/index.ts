import { Transacoes } from "../EnumTransacoes";

type InputType = {
    tipoTransacao: Transacoes;
    valor: number ;
    data: string;
};

export default InputType