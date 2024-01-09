import { Banner } from "../../components/Banner"
import { Desserts } from "../../components/Desserts"
import { Meals } from "../../components/Meals"
import { Drinks } from "../../components/Drinks"

export const Home = () => {
    return (
        <>
            <Banner />
            <Meals />
            <Desserts />
            <Drinks />
        </>
    )
}