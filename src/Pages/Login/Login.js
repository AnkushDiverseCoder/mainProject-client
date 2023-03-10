import React from "react";
import trees from "../../assets/trees.jpg";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Cookies from "js-cookie";

const Login = () => {
  // State
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  // Navigation
  const navigate = useNavigate();

  //  Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { email, password });
      Cookies.set("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto shadow-lg shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={trees} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl font-bold text-center mb-8">
              VAISHNAVI CONSULTANT.
            </h2>
            <div>
              <input
                className="border p-2 mr-2"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border p-2"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full py-2 my-4 bg-green-600 hover:bg-green-500">
              Sign In
            </button>
            {error && error}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
