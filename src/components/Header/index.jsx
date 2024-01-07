import { useCallback, useState } from 'react'

import { Button } from '../Button'

import { Logo } from '../Logo'
import { SearchIcon } from '../SearchIcon'
import { ReceiptIcon } from '../ReceiptIcon'
import { SignOutIcon } from '../SignOutIcon'

import { Container, SearchContainer } from "./styles"

export const Header = () => {
    const [hasValueOnSearchInput, setHasValueOnSearchInput] = useState(null)

    const onChangeInputSearch = useCallback((event) => {
        const inputValue = event.target.value
        setHasValueOnSearchInput(inputValue.length > 0 ? inputValue : null)
    }, [])

    const isUserAdmin = false

    return (
        <Container>
            <Logo />
            <SearchContainer>
                {!hasValueOnSearchInput ? (
                    <div>
                    <SearchIcon width={25} height={24} />
                    <label htmlFor='search'>Busque por pratos ou ingredientes</label>
                </div>
                ) : (
                    ""
                )}
                <input type="text" id='search' onChange={onChangeInputSearch} />
            </SearchContainer>
            {isUserAdmin ? (
                <Button>
                    Novo prato
                </Button>
            ) : (
                <Button>
                    <ReceiptIcon width={33} height={32} />
                    Pedidos (0)
                </Button>
            )}
            <SignOutIcon width={32} height={32} />
        </Container>
    )
}