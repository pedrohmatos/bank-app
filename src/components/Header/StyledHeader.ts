import styled from "styled-components";
import { StyledContainer } from "../../styles/shared/StyledContainer";

export const StyledHeader = styled(StyledContainer)`
    background-color: var(--cor-primaria);
    color: var(--cor-secundaria);
    font-size: var(--fonte-t3);
    padding: 30px;
    margin-bottom: 24px;

    & h1 {
        margin: 0;
    }

    div {
        & span {
            margin-right: 40px;
        }
    }
`;