import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}