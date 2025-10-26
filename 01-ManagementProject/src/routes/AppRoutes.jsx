import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const WorkSpace = lazy(() => import("../pages/WorkSpace"));
const Login = lazy(() => import("../pages/login"));
const Signup = lazy(() => import("../pages/signup"));

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private routes */}
          <Route path="/workspace" element={<WorkSpace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
