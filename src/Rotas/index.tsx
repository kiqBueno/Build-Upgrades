import { Navigate, Route, Routes } from "react-router-dom";
import { PaginaInicial } from '../Componentes/Pagina Inicial';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/Pagina-Inicial" element={<PaginaInicial />} />
            <Route path="*" element={<Navigate to="/Pagina-inicial" />} />
        </Routes>
    )
}
