import styled from "styled-components";
import { StyledDiv } from "./StyledDiv";

export const StyledContainer = styled(StyledDiv)`
    padding-left: calc((100% - var(--largura-padrao)) / 2);
    padding-right: calc((100% - var(--largura-padrao)) / 2);

    @media (max-width: 1200px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
