import { Button } from '../Button'
import { Logo } from '../Logo'
import { SearchIcon } from '../SeachIcon'
import { Container, SearchContainer } from "./styles"

import { ReceiptIcon } from '../ReceiptIcon'
import { SignOutIcon } from '../SignOutIcon'

export const Header = () => {
    return (
        <Container>
            <Logo />
            <SearchContainer>
                <div>
                    <SearchIcon width={25} height={24} />
                    <label>Busque por pratos ou ingredientes</label>
                </div>
                <input type="text" />
            </SearchContainer>
            <Button>
                    <ReceiptIcon width={33} height={32} />
                    Pedidos (0)
            </Button>
            <SignOutIcon width={32} height={32} />
        </Container>
    )
}