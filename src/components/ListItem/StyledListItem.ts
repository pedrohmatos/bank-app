import styled from "styled-components";

const StyledListItem = styled.div<{$completed: boolean}>`    
    background-color: ${props => props.$completed ? "#21212199" : "#212121"};
    width: 90%;
    margin: 32px auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;

    & .content {
        display: flex;
        flex-direction: column;

        & h3, time {
            margin: 0;
        }

        & h3 {
            color: #47A138;
        }

        & time {
            color: #AAAAAA;
            text-transform: capitalize;
        }
    }

    & .options {
        display: flex;
        column-gap: 16px;
        color: #f8f8f8;
        
        & .check {
            color: ${props => props.$completed ? "#47A138" : "#f8f8f8"};
        }

        & svg:hover {
            transition: 0.3s;
            transform: scale(1.3);
        }
        
        & svg {
            cursor: pointer;
            font-size: 20px;
        }

        & .check:hover {
            color: #47A138;
        }

        & .trash:hover {
            color: #E51338;
        }
    }
`;

export default StyledListItem