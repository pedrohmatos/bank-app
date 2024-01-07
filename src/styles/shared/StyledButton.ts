import styled from "styled-components";
import StyledInputBox from "./StyledInputBox";

const StyledButton = styled(StyledInputBox)`
    background-color: var(--cor-secundaria);
    color: #fff;
    padding: 16px 40px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: var(--cor-primaria);
    }
`;

export default StyledButton