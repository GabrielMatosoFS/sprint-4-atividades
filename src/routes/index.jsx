import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ContactPage } from "../pages/ContactPage"
import { ProjectsPage } from "../pages/ProjectsPage"
import { TestmonialsPage } from "../pages/TestmonialsPage"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />  
            <Route path="/contact" element={<ContactPage />} />  
            <Route path="/projects" element={<ProjectsPage />} />  
            <Route path="/testmonials" element={<TestmonialsPage/>} />  
        </Routes>
    )
}