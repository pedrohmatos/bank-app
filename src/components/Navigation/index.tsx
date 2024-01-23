import { NavLink } from "react-router-dom"
import StyledNav from "./StyledNav"

const Navigation = (): JSX.Element => {
    return (
        <StyledNav>
            <NavLink to={"/"}>Início</NavLink>
            <NavLink to={"/planejamento"}>Planejamento</NavLink>
            <a href="#">Atualizações</a>
        </StyledNav>
    )
}

export default Navigation