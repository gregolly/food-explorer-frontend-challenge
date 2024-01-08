import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"

import { Default } from '../layouts/Default'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Default />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}