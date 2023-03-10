import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import newRequest from "../../utils/newRequest";
import Cookies from "js-cookie";

const Navbar = () => {

// Check Login
const navigate = useNavigate();
const [isAdmin, setIsAdmin] = React.useState(false)
  useEffect(() => {
    const verifyUser = async () => {
      const { data } = await newRequest.post("/auth/verify", {
        token: Cookies.get("token"),
      });
      setIsAdmin(data.isAdmin);
      if (data.status === "false") {
        navigate("/login");
      }
    };
    
    verifyUser();
  }, [navigate]);
  
const handleLogout = async(e) => {
   e.preventDefault();
   await Cookies.remove("token");
   navigate("/login")
}

  return (
    <div className="bg-gray-900 text-white">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @media only screen and (min-width: 768px){\n        .parent:hover .child {\n            opacity:1;\n            height:auto;\n            overflow:none;\n            transform: translateY(0);\n        }\n        .child {\n            opacity:0;\n            height:0;\n            overflow:hidden;\n            transform: translateY(-10%);\n        }\n    }\n    \n",
        }}
      />
      <nav className="flex px-4 border-b md:shadow-lg items-center relative">
        <div className="text-lg font-bold md:py-0 py-4" onClick={()=>navigate("/")}>Logo</div>
        <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        {/* First  */}
          {isAdmin && <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-900 hover:text-white space-x-2"
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
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-900 md:shadow-lg md:rounded-b ">
              <li>
                <Link to="/company/add" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Add Company
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Modify Company
                </Link>
              </li>
            </ul>
          </li>}
          
          {/* Second  */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-900 hover:text-white space-x-2"
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
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-900 md:shadow-lg md:rounded-b ">
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Add Employee
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Modify Employee
                </Link>
              </li>

            </ul>
          </li>
          
          {/* Third */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-900 hover:text-white space-x-2"
            >
            {/* Heading */}
              <span>Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>
            
            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-900 md:shadow-lg md:rounded-b ">
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web development
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </li>
          
          
          {/* Fourth */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-900 hover:text-white space-x-2"
            >
            {/* Heading */}
              <span>Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>
            
            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-900 md:shadow-lg md:rounded-b ">
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web development
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </li>
          
          
          {/* Fifth */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-900 hover:text-white space-x-2"
            >
            {/* Heading */}
              <span>Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>
            
            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-900 md:shadow-lg md:rounded-b ">
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web development
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </li>
          
          
          {/* Sixth */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-900 hover:text-white space-x-2"
            >
            {/* Heading */}
              <span>Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>
            
            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-900 md:shadow-lg md:rounded-b ">
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web development
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </li>
          
          
          {/* Seventh */}
          <li className="relative parent">
            <p
              href="#"
              className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-900 hover:text-white space-x-2"
            >
            {/* Heading */}
              <span>Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
              </svg>
            </p>
            
            {/* Elements */}
            <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-gray-900 md:shadow-lg md:rounded-b ">
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web development
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="#" className="flex px-4 py-3 hover:bg-gray-900 hover:text-white">
                  Machine Learning
                </Link>
              </li>
            </ul>
          </li>
          
          <li onClick={handleLogout}>
                <p href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-900">
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
