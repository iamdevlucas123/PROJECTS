import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { lazy, Suspense} from "react"

const Home = lazy(() => import ("../pages/Home"))
const WorkSpace = lazy(() => import("../pages/WorkSpace"))

export default function AppRoutes() {
    return (
        <Router>
            <Suspense fallback={<div>Carregando...</div>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/WorkSpace" element={<WorkSpace/>}/>
                </Routes>
            </Suspense>
        </Router>
    )
}