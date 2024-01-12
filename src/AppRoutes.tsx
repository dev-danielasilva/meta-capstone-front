import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./components/BaseLayout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Reserving = lazy(() => import("./pages/Reserving"));
export default function AppRoutes() {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Navigate to={"/home"} replace />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/about"} element={<Home />} />
          <Route path={"/menu"} element={<Home />} />
          <Route path={"/order-online"} element={<Home />} />
          <Route path={"/reservations"} element={<Reserving />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
