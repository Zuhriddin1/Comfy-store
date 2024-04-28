import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Card from "./pages/Card";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Chekout from "./pages/Chekout";
import Orders from "./pages/Orders";
import Layout from "./layout";
import { createContext, useEffect, useState } from "react";
import Basket from "./pages/Basket";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();
  function ProtectedRoute({
    children,
    isAudintificate,
    rederectTo = "/login",
  }) {
    if (!isAudintificate) {
      navigate(rederectTo);
    }
    return children;
  }
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home></Home>
              </Layout>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <Layout>
                <About></About>
              </Layout>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <Layout>
                <Products></Products>
              </Layout>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Layout>
                <Card></Card>
              </Layout>
            }
          ></Route>
          <Route
            path="/product/:id"
            element={
              <Layout>
                <Details></Details>
              </Layout>
            }
          ></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/basket"
            element={
              <Layout>
                  <Basket></Basket>
              </Layout>
            }
          ></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          <Route
            path="/checkout"
            element={
              <ProtectedRoute isAudintificate={false}>
                <Layout>
                  <Chekout></Chekout>
                </Layout>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <ProtectedRoute isAudintificate={false}>
                <Layout>
                  <Orders></Orders>
                </Layout>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}
export default App;
