import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Planejamento from "./pages/Planejamento"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/planejamento" element={<Planejamento />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
