import { Logo } from '../Logo'
import { Container, SearchContainer } from "./styles"

import { FaSearch } from 'react-icons/fa'

export const Header = () => {
    return (
        <Container>
            <Logo />
            <SearchContainer>
                <div>
                    <FaSearch />
                    <label>Busque por pratos ou ingredientes</label>
                </div>
                <input type="text" />
            </SearchContainer>
        </Container>
    )
}