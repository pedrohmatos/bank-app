import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Transaction from "../../components/Transaction";
// Import components

import { StyledAside, StyledDivContent } from "../../styles/shared/StyledApp";
import StyledButton from "../../styles/shared/StyledButton";
import { useContext } from "react";
import { ExtratoContext } from "../../context/ExtratoContext";
// Import styled components

const Layout = () => {
    const extratoConxtet = useContext(ExtratoContext);

    const clearMemory = () => {
        localStorage.clear();
        extratoConxtet?.setExtrato([]);
    };

    return (
        <>
            <Header />
            <StyledDivContent>
                <Navigation />

                <Outlet />

                <StyledAside>
                    <div className="title">
                        <h3>Extrato</h3>
                        <StyledButton
                            as={"button"}
                            type="button"
                            onClick={clearMemory}
                        >
                            Limpar
                        </StyledButton>
                    </div>
                    <div className="registro-transacoes">
                        {
                            extratoConxtet?.extrato.length === 0 ? <div>Não há transações registradas.</div> :
                                extratoConxtet?.extrato.map((obj, ind) => {
                                    return <Transaction key={ind} {...obj} />
                                })
                        }
                    </div>
                </StyledAside>
            </StyledDivContent>
        </>
    )
}

export default Layout