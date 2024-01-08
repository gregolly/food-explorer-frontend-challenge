import { Card } from "./components/Card"
import { Container, Wrapper } from "./styles"

export const Meals = () => {
    return (
        <Container>
            <h2>Refeições</h2>
            <Wrapper>
                <Card />
                <Card />
            </Wrapper>
        </Container>
    )
}