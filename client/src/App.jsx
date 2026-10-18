import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./context/ThemeContext";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--bg-card)",
            color: "var(--text)",
            border: "1px solid var(--border)",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
