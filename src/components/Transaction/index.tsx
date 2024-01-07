import InputType from "../../types/InputType";
import StyledItem from "./StyledItem";

const Transaction = ({tipoTransacao, valor, data}: InputType) => {

    const newDate: string = (new Date(data).toLocaleDateString("pt-br", {day: "2-digit", month: "2-digit", year: "2-digit"})).toString();

    return (
        <StyledItem>
            <div className="transacao-info">
                <span className="tipo">{tipoTransacao}</span>
                <strong className="valor">{valor.toFixed(2).replace(".", ",")}</strong>
            </div>
            <time className="data">{newDate}</time>
        </StyledItem>
    )
};

export default Transaction