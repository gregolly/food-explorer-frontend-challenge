import { Card } from "../Meals/components/Card"
import { Container, Wrapper } from "./styles"

export const Desserts = () => {
    return (
        <Container>
            <h2>Sobremesas</h2>
            <Wrapper>
                <Card />
                <Card />
            </Wrapper>
        </Container>
    )
}