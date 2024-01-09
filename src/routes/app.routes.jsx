
import { Home } from "../pages/Home"

import { Default } from '../layouts/Default'

import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Default />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}