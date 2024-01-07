import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: #f5f5f5;
    padding: 30px;
    border-radius: 8px;
    width: 180px;
    text-align: center;
    margin-right: 24px;

    & a {
        display: block;
        padding-block: 16px;
        border-bottom: 1px solid var(--cor-primaria);

        &:first-of-type {
            padding-top: 5px;
        }

        &:last-of-type {
            border-bottom: none;
        }

        &.active {
            color: var(--cor-secundaria);
            border-bottom-color: var(--cor-secundaria);
            font-weight: 700;
        }
    }

    @media (max-width: 950px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 24px;
    }  
`;

export default StyledNav