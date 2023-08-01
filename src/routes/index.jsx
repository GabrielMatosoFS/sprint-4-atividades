import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { useState } from "react"

export const RoutesMain = () => {
    const [user, setUser] = useState(null);
    return(
        <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/register" element={<RegisterPage setUser={setUser} />} />
        </Routes>
    )
}