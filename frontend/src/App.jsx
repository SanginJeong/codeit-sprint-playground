import "./App.css";
import { Routes, Route } from "react-router";
import PrivateRoute from "./route/PrivateRoute";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostDetailPage from "./pages/PostDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import ToastMessage from "./common/ToastMessage";
import AppLayout from "./layout/AppLayout";
import PartPage from "./pages/PartPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/part/:id" element={<PartPage />}>
            <Route path=":category" element={<CategoryDetailPage />} />
          </Route>
          <Route path="/postDetail/:id" element={<PostDetailPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminPage />} />
          {/*  */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastMessage />
    </>
  );
}

export default App;
