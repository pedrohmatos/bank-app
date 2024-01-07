import StyledNav from "./StyledNav"

const Navigation = (): JSX.Element => {
    return (
        <StyledNav>
            <a href="#" className="active">Início</a>
            <a href="#">Transferências</a>
            <a href="#">Planejamento</a>
        </StyledNav>
    )
}

export default Navigation