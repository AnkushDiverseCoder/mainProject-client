import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddCompany from "./Pages/Company/AddCompany";
import newRequest from "./utils/newRequest";
import Cookies from "js-cookie";

const Root = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(false);
  const [checkUserRole, setCheckUserRole] = React.useState({
    isAdmin: false,
    isStaff: false,
    isEmployee: false,
  });

  useEffect(() => {
    const verifyUser = async () => {
      const { data } = await newRequest.post("/auth/verify", {
        token: Cookies.get("token"),
      });

      if (data.status === "true") {
        setIsLogin(true);
        if (data?.isAdmin) {
          setCheckUserRole({
            ...checkUserRole,
            isAdmin: true,
          });
        } else if (data?.isStaff) {
          setCheckUserRole({
            ...checkUserRole,
            isStaff: true,
          });
        } else {
          setCheckUserRole({
            ...checkUserRole,
            isEmployee: true,
          });
        }
      }
    };
    verifyUser();
  }, [navigate, checkUserRole]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={!isLogin ? <Login /> : <Dashboard/>}
        />
        <Route
          exact
          index
          path="/"
          element={isLogin ? <Dashboard /> : <Login /> }
        />
        <Route
          path="/register"
          element={
            isLogin && checkUserRole.isAdmin ? <Register /> : <Login /> 
          }
        />
        <Route
          path="/company/add"
          element={isLogin ? <AddCompany /> : <Login /> }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Root;
