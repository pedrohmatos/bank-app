import styled from "styled-components";
import { StyledContainer } from "./StyledContainer";

export const StyledDivContent = styled(StyledContainer)`
    align-items: stretch;
`;

export const StyledDiv = styled.div`    
    flex-grow: 1;
`;

export const StyledBalanceSection = styled.section<{ $img: string[] }>`
    height: 400px;
    padding: 24px;
    border-radius: 8px;
    background-image: url(${(props) => props.$img[0]}), url(${(props) => props.$img[1]});
    background-position: bottom left, top right;
    background-repeat: no-repeat;
    background-color: var(--cor-secundaria);
    color: #fff;

    & h2 {
        font-size: var(--fonte-t1);
        padding: 0;
        margin-block: 0 24px;
        
        & + time {
            font-size: var(--fonte-t3);
        }
    }

    & div {
        display: flex;
        justify-content: flex-end;

        & div {
            display: flex;
            flex-direction: column;
            min-width: 180px;   

            & strong {
                font-size: var(--fonte-t2);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border-bottom: 2px solid #fff;
                padding-bottom: 14px;
                margin-bottom: 14px;

                & img {
                    margin-left: 25px;
                }
            }

            & div {
                .valor {
                    display: block;
                    font-size: 30px;
                }
            }
        }
    }

    @media (max-width: 950px) {
        width: 100%;
    }
`;

export const StyledTransactionSection = styled.section<{ $img: string[] }>`
    height: 590px;
    padding: 24px;
    border-radius: 8px;
    background-image: url(${props => props.$img[0]}), url(${props => props.$img[1]}), url(${props => props.$img[2]});
    background-position: bottom left, bottom 23px right, top right;
    background-repeat: no-repeat;
    background-color: var(--cor-tercearia);
    margin-top: 24px;

    & h2 {
        font-size: var(--fonte-t1);
        padding: 0;
        margin-block: 0 32px;
    }

    & select#tipoTransacao {
        width: 355px;
    }

    @media (max-width: 950px) {
        width: 100%;
    }
`;

export const StyledAside = styled.aside`
    background-color: #f5f5f5;
    padding: 30px;
    border-radius: 8px;
    width: 282px;
    margin-left: 24px;

    & .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & button {
            padding: 10px;
        }
    }

    & h3 {
        font-size: var(--fonte-t1);
        padding: 0;
        /* margin-block: 0 32px; */
    }

    & .transacoes-group {
        margin-bottom: 16px;
        
        .mes-group {
            color: var(--cor-secundaria);
            font-weight: 600;
            font-size: var(--fonte-t2);
            text-transform: capitalize;
        }
    }

    @media (max-width: 960px) {
        width: 100%;
        margin-left: 0;
        margin-top: 24px;

        & .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            & button {
                padding: 16px 40px;
            }
        }
    }
`;