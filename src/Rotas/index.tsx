import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/Pagina-Inicial"/>
            <Route path="*" element={<Navigate to="/Pagina-inicial" />} />
        </Routes>
    )
}