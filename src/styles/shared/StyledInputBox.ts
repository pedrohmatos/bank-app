import styled from "styled-components";

const StyledInputBox = styled.div<{ $img?: string }>`

    margin-bottom: 32px;

    &:last-of-type {
        margin-bottom: 0;
    }

    & label {
        display: block;
        font-size: var(--fonte-t3);
        margin-bottom: 8px;
        font-weight: bold;
        text-transform: capitalize;
    }

    .campo-input {
        border: 1px solid var(--cor-secundaria);
        background-color: #fff;
        border-radius: 8px;
        padding: 12px 16px;
        color: #444444;
        text-align: center;

        &:where(select) {
            appearance: none;
            background-image: url(${props => props.$img});
            background-repeat: no-repeat;
            background-position: top 50% right 16px;
        }
    }

    /* .btn {
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
    } */
`;

export default StyledInputBox