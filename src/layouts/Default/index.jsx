import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Container } from "./styles"

export const Default = () => {
    return (
        <Container>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </Container>
    )
}