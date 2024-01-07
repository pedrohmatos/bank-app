import styled from "styled-components";

const StyledItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .transacao-info {
        width: 180px;
        border-bottom: 1px solid var(--cor-secundaria);
        padding-bottom: 16px;
        margin-bottom: 16px;

        .tipo {
            display: block;
        }

        @media screen and (max-width: 950px) {
            flex-grow: 1;
        }
    }

    .data {
        color: var(--cor-secundaria);
    }

    &:last-of-type .transacao-info {
        border-bottom: none;
        margin-bottom: 0;
    }
`;

export default StyledItem