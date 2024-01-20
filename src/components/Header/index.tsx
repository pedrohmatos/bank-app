import { StyledHeader } from "./StyledHeader";
import logo from "../../assets/images/logo-bytebank.svg";
import avatar from "../../assets/images/avatar.svg";
import { StyledContainer } from "../../styles/shared/StyledContainer";

const Header = (): JSX.Element => {
    return (
        <>
            <StyledHeader as={"header"}>
                <img src={logo} alt="Bytebank" />
                <StyledContainer>
                    <span>Nome do usuário</span>
                    <img src={avatar} alt="Joana da Silva Oliveira" />
                </StyledContainer>
            </StyledHeader>
        </>
    )
};

export default Header