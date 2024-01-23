import { StyledHeader } from "./StyledHeader";
import avatar from "../../assets/images/avatar.svg";
import { StyledContainer } from "../../styles/shared/StyledContainer";

const Header = (): JSX.Element => {
    return (
        <>
            <StyledHeader as={"header"}>
                <h1>AppBank</h1>
                <StyledContainer>
                    <span>Nome do usuário</span>
                    <img src={avatar} alt="Joana da Silva Oliveira" />
                </StyledContainer>
            </StyledHeader>
        </>
    )
};

export default Header