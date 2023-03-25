import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddCompany from "./Pages/Company/AddCompany";
// import newRequest from "./utils/newRequest";
// import Cookies from "js-cookie";
import ModifyAndDelete from "./Pages/Company/ModifyAndDelete";
import AddEmployee from "./Pages/Master/AddEmployee";
import AdditionalDetails from "./Pages/Master/AdditionalDetails";
import EmployeeReport from "./Pages/report/EmployeeReport";

const Root = () => {
  // const navigate = useNavigate();
  // const [checkUserRole, setCheckUserRole] = React.useState({
  //   isAdmin: false,
  //   isStaff: false,
  //   isEmployee: false,
  // });

  // useEffect(() => {
  //   const verifyUser = async () => {
  //     // const { data } =
  //     await newRequest.post("/auth/verify", {
  //       token: Cookies.get("token"),
  //     });

  // if (data.status === "true") {
  //   setIsLogin(true);
  //   if (data?.isAdmin) {
  //     setCheckUserRole({
  //       ...checkUserRole,
  //       isAdmin: true,
  //     });
  //   } else if (data?.isStaff) {
  //     setCheckUserRole({
  //       ...checkUserRole,
  //       isStaff: true,
  //     });
  //   } else {
  //     setCheckUserRole({
  //       ...checkUserRole,
  //       isEmployee: true,
  //     });
  //   }
  // }
  //   };
  //   verifyUser();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [navigate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact index path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/company/add" element={<AddCompany />} />
        <Route path="/company/modify" element={<ModifyAndDelete />} />
        <Route path="/employee/add" element={<AddEmployee />} />
        <Route
          path="/employee/additionalDetails"
          element={<AdditionalDetails />}
        />
        <Route path="/report/employeeReport" element={<EmployeeReport />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Root;
