import { Routes, Route } from "react-router";
import TermsPage from "./pages/TermsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import FormPage from "./pages/FormPage.jsx";
import RHFPage from "./pages/RHFPage.jsx";
import EmployeesPage from "./pages/EmployeesPage.jsx";

//component
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />

        <Route path="/product-list" element={<ProductListPage />} />

        {/*Dynamic Route */}
        <Route path="product/:productSlug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="rhf" element={<RHFPage />} />
        <Route path="employees" element={<EmployeesPage />} />

        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  );
}
export default App;
