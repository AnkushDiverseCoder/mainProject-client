import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Cookies from "js-cookie";

const Navbar = () => {
  // Check Login
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [companyName, setCompanyName] = React.useState("");
  useEffect(() => {
    const verifyUser = async () => {
      const { data } = await newRequest.post("/auth/verify", {
        token: Cookies.get("token"),
      });
      if (data.status === "false") {
        navigate("/login");
      } else {
        setIsAdmin(data.isAdmin);
      }
      setCompanyName(Cookies.get("companyName"));
    };

    verifyUser();
  }, [navigate]);

  const handleLogout = async (e) => {
    e.preventDefault();
    Cookies.remove('token')
    (navigate("/login"));
  };

  return (
    <div className="bg-[#ABF1BC] text-black">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @media only screen and (min-width: 768px){\n        .parent:hover .child {\n            opacity:1;\n            height:auto;\n            overflow:none;\n            transform: translateY(0);\n        }\n        .child {\n            opacity:0;\n            height:0;\n            overflow:hidden;\n            transform: translateY(-10%);\n        }\n    }\n    \n",
        }}
      />
      <nav className="flex px-4 border-b md:shadow-lg items-center relative">
        
        <div
          className="text-lg font-bold md:py-0 py-4"
          onClick={() => navigate("/")}
        >
          {companyName ? companyName : "Logo"}
        </div>
        
        <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
          {/* First  */}
          {isAdmin && (
            <li className="relative parent">
              <p
                href="#"
                className="flex justify-between md:inline-flex p-4 items-center hover:bg-[#8CE68C] hover:text-black space-x-2"
              >
                {/* Heading */}
                <span>Company</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current pt-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              </p>

              {/* Elements */}
              <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#AEE7F8] md:shadow-lg md:rounded-b rounded-lg ">
                <li>
                  <Link
                    to="/company/add"
                    className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black rounded-lg"
                  >
                    Add Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company/modify"
                    className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                  >
                    Modify Company
                  </Link>
                </li>
              </ul>
            </li>
          )}

          {/* Second  */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-[#8CE68C] hover:text-black space-x-2"
            >
              {/* Heading */}
              <span>Masters</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>

            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#AEE7F8] md:shadow-lg md:rounded-b rounded-lg">
              <li>
                <Link
                  to="/employee/add"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Add Employee
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Modify Employee
                </Link>
              </li>
            </ul>
          </li>

          {/* Third */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-[#8CE68C] hover:text-black space-x-2"
            >
              {/* Heading */}
              <span>Attendance</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>

            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#AEE7F8] md:shadow-lg md:rounded-b rounded-lg">
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Daily Attendance Entry
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Weekly Attendance Entry
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Monthly Attendance Entry
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Upload Attendance Entry
                </Link>
              </li>
            </ul>
          </li>

          {/* Fourth */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-[#8CE68C] hover:text-black space-x-2"
            >
              {/* Heading */}
              <span>Payroll</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>

            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#AEE7F8] md:shadow-lg md:rounded-b rounded-lg">
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Monthly Salary Process
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  View / Modify / Delete Salaries 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Add OverTime
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Advance / Stop Payment
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Arrear Payments
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Employees Loans Details
                </Link>
              </li>
            </ul>
          </li>

          {/* Fifth */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-[#8CE68C] hover:text-black space-x-2"
            >
              {/* Heading */}
              <span>Reports</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>

            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#AEE7F8] md:shadow-lg md:rounded-b rounded-lg">
              
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Company Report
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Employee Report
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Attendance Report
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Salary Statement Report 
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Payslip
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate OverTime Report
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Advance Stop Payment Report
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Arrear Reports 
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Loans Reports 
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Monthly Text File For Epf 
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Monthly Template File For ESIC
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Monthly Bank Advice
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  EPF All Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  ESIC All Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Labour Act All Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/report/employeeReport"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Employees All Reports
                </Link>
              </li>
              
            </ul>
          </li>

          {/* Sixth */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-[#8CE68C] hover:text-black space-x-2"
            >
              {/* Heading */}
              <span>Utility</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>

            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#AEE7F8] md:shadow-lg md:rounded-b rounded-lg">
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Import / Export Employee Data
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Import / Export Attendance Data
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Import / Export Monthly Salary
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Import / Export Monthly OverTime
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Cheque Print
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Monthly Professional Invoice / Details 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Validate the PAN / TAN
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Bank / IFSC Search
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Calculator 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  PDF Convertor 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Setting / Printer Setting 
                </Link>
              </li>
              
            </ul>
          </li>

          {/* Seventh */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-[#8CE68C] hover:text-black space-x-2"
            >
              {/* Heading */}
              <span> Help / Misc.'s </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>

            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#AEE7F8] md:shadow-lg md:rounded-b rounded-lg">
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Help Functions
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Backup / Restore the Data
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Bulk SMS / E-Mail
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Staff User ID and Password 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Generate Customer User ID and Password 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Reset The Password Staff and Customer  
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Lock / Unlock the Month  
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Salary Certificate   
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Monthly Expenditure
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Monthly Cash Flow 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Download All Report in a Folder
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Add / View Request of Staff
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex px-4 py-3 hover:bg-[#87CDF6] hover:text-black"
                >
                  Add / View Request of Customer
                </Link>
              </li>
              
            </ul>
          </li>

          <li onClick={handleLogout}>
            <p
              href="#"
              class="flex md:inline-flex p-4 items-center hover:bg-[#8CE68C]"
            >
              <span className="font-bold">Logout</span>
            </p>
          </li>
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
