import food from '../../assets/food.png'

import { Container } from "./styles"

export const Banner = () => {
    return (
        <Container>
            <img src={food} alt="" />
            <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
        </Container>
    )
}