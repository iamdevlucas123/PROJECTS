import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


const Home = lazy(() => import("../pages/Home"));
const WorkSpace = lazy(() => import("../pages/WorkSpace"));
const Login = lazy(() => import("../pages/login"));
const Signup = lazy(() => import("../pages/signup"));


export default function AppRoutes() {
  
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

          {/* Rotas privadas */}
          <Routes>
            <Route path="/workspace" element={<WorkSpace />} />
          </Routes>
        </Suspense>
    </Router>
  );
}
