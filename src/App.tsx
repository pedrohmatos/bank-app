import Header from "./components/Header";
import Navigation from "./components/Navigation";
import InputBox from "./components/InputBox";
import Transaction from "./components/Transaction";
// Import components

import { StyledAside, StyledBalanceSection, StyledDiv, StyledMain, StyledTransactionSection } from "./styles/StyledApp";
import StyledInputBox from "./styles/shared/StyledInputBox";
import StyledButton from "./styles/shared/StyledButton";
// Import styled components

import olho from "./assets/images/olho.svg";
import bg1 from "./assets/images/saldo-bg1.png";
import bg2 from "./assets/images/saldo-bg2.png";
import bg3 from "./assets/images/nova-transacao-bg1.png";
import bg4 from "./assets/images/nova-transacao-bg2.png";
import bg5 from "./assets/images/nova-transacao-bg3.png";
import arrow from "./assets/images/arrow_drop_down.png";
// Import images

import { useEffect, useState } from "react";
// import hooks

import swal from "sweetalert";
import InputType from "./types/InputType";


export enum Transacoes {
    Deposito = "Depósito",
    Transferencia = "Transferência",
    PagamentoDeBoleto = "Pagamento de Boleto"
}

type EventType = HTMLInputElement | HTMLSelectElement;

function App() {

    const currentDay = new Date().toLocaleDateString(
        "pt-br", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }
    );

    const [inputValues, setInputValues] = useState<InputType>(
        {
            tipoTransacao: "" as Transacoes,
            valor: 0,
            data: ""
        }
    );

    const localStorageData: string | null = localStorage.getItem("transacao");
    const initialExtrato: InputType[] = localStorageData ? JSON.parse(localStorageData) : [];

    const [extrato, setExtrato] = useState<InputType[]>(initialExtrato);

    const [conta, setConta] = useState<number>(0);

    useEffect(() => {
        const depositos = extrato.filter(el => el.tipoTransacao === Transacoes.Deposito).reduce((ac, el) => ac + el.valor, 0);
        const despesas = extrato.filter(el => el.tipoTransacao !== Transacoes.Deposito).reduce((ac, el) => ac + el.valor, 0);
        setConta(depositos - despesas);
        localStorage.setItem("transacao", JSON.stringify(extrato));
    }, [extrato]);

    const handleChange = (evTarget: EventTarget & EventType) => {
        const inputIdentifier: string | null = evTarget.getAttribute("id");

        if (inputIdentifier === "valor") {
            setInputValues((prev) => {
                return { ...prev, valor: Number(evTarget.value) }
            });
        } else if (inputIdentifier === "data") {
            setInputValues((prev) => {
                return { ...prev, data: evTarget.value }
            })
        } else if (inputIdentifier === "tipoTransacao") {
            setInputValues((prev) => {
                const selectValue: Transacoes = evTarget.value as Transacoes;
                return { ...prev, tipoTransacao: selectValue }
            });
        }

    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(Transacoes).includes(inputValues.tipoTransacao)) {
            setExtrato((prev) => {
                return [{ ...inputValues }, ...prev];
            });
        } else {
            swal({
                title: "Transação inválida",
                text: "Verifique se a transação que deseja realizar é depósito, transferência ou pagamento de boleto",
                icon: "warning",
                buttons: [false, "Entendi"]
            });
            setInputValues(
                {
                    tipoTransacao: "" as Transacoes,
                    valor: 0,
                    data: ""
                }
            );
        }
    };

    const clearMemory = () => {
        localStorage.clear();
        setExtrato([]);
    };


    return (
        <>
            <Header />
            <StyledMain as={"main"}>
                <Navigation />
                <StyledDiv>
                    <StyledBalanceSection $img={[bg1, bg2]}>
                        <h2>Olá, Joana</h2>
                        <time>{currentDay}</time>
                        <div>
                            <div>
                                <strong>
                                    Saldo <img src={olho} alt="Mostrar saldo" />
                                </strong>
                                <div>
                                    <span>Conta Corrente</span>
                                    <span className="valor">R$ {conta.toFixed(2).replace(".", ",")}</span>
                                </div>
                            </div>
                        </div>
                    </StyledBalanceSection>
                    <StyledTransactionSection $img={[bg3, bg4, bg5]}>
                        <h2>Nova transação</h2>
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <StyledInputBox $img={arrow}>
                                <select
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e.target)}
                                    id={"tipoTransacao"}
                                    className="campo-input"
                                    required
                                >
                                    <option value="">Selecione o tipo de transação</option>
                                    <option value={Transacoes.Deposito}>Depósito</option>
                                    <option value={Transacoes.Transferencia}>Transferência</option>
                                    <option value={Transacoes.PagamentoDeBoleto}>Pagamento de Boleto</option>
                                </select>
                            </StyledInputBox>
                            <InputBox
                                inputChange={handleChange}
                                value={inputValues.valor}
                                inputType={"number"}
                                inputId={"valor"}
                                inputPlaceholder={"0,00"}
                            />
                            <InputBox
                                inputChange={handleChange}
                                value={inputValues.data}
                                inputType={"date"}
                                inputId={"data"}
                            />
                            <div>
                                <StyledButton as={"button"} type="submit">
                                    Concluir transação
                                </StyledButton>
                            </div>
                        </form>
                    </StyledTransactionSection>
                </StyledDiv>
                <StyledAside>
                    <div className="title">
                        <h3>Extrato</h3>
                        <StyledButton as={"button"} type="button" onClick={clearMemory}>
                            Limpar
                        </StyledButton>
                    </div>
                    <div className="registro-transacoes">
                        {
                            extrato.length === 0 ? <div>Não há transações registradas.</div> :
                                extrato.map((obj, ind) => {
                                    return <Transaction key={ind} {...obj} />
                                })
                        }
                    </div>
                </StyledAside>
            </StyledMain>
        </>
    )
}

export default App
