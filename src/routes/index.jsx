import { BrowserRouter } from "react-router-dom"
import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"

export const Routes = () => {
    const isLogged = true

    return (
        <BrowserRouter>
            { !isLogged ? <AppRoutes /> : <AuthRoutes /> }
        </BrowserRouter>
    )
}