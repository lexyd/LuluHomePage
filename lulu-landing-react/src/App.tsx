import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import VideosPage from "./pages/VideosPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/new" element={<Navigate to="/" replace />} />
        <Route path="/women" element={<Navigate to="/about" replace />} />
        <Route path="/accessories" element={<Navigate to="/videos" replace />} />
        <Route path="/men" element={<Navigate to="/projects" replace />} />
        <Route path="/mothers-day" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
