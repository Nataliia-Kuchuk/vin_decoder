import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";


const Home  = lazy(() => import("../pages/Home/Home"))
const VariablesList = lazy(
  () => import("../pages/VariablesList/VariablesList")
);
const VariableId = lazy(() => import("../pages/VariableId/VariableId"));

const RoutesPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/vin_decoder/" element={<Home />} />
        <Route path="/variables" element={<VariablesList />} />
        <Route path="variables/:id" element={<VariableId />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesPage;
