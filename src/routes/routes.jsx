import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home.jsx'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;