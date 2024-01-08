
import { Polygon } from "./components/Polygon"
import { Container } from "./styles"

export const Footer = () => {
    return (
        <Container>
            <div>
                <Polygon />
                <h3>food explorer</h3>
            </div>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}