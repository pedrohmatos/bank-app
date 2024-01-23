import styled from "styled-components";

const StyledMain = styled.main`
    background-color: #3C3C3C;
    border-radius: 7px;
    flex-grow: 1;

    & h2 {
        top: 0;
        font-size: 32px;
        text-align: center;
        /* background-color: var(--cor-primaria); */
        background-color: var(--cor-secundaria);
        border-radius: 7px 7px 0px 0px;
        color: #f8f8f8;
        margin: 0;
        padding: 32px;
    }

    & form {
        display: flex;
        justify-content: space-around;
        align-items: end;
        flex-wrap: wrap;
        margin: 64px 16px;
        gap: 32px;

        & div {
            color: #f8f8f8;
            margin: 0;
        }
    }

    @media screen and (max-width: 540px){
        & form:first-of-type {
            justify-content: flex-start;
        }
    }
`;

export default StyledMain