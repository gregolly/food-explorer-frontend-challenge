import { Card } from "../Meals/components/Card"
import { Container, Wrapper } from "./styles"

export const Drinks = () => {
    return (
        <Container>
            <h2>Bebidas</h2>
            <Wrapper>
                <Card />
                <Card />
            </Wrapper>
        </Container>
    )
}