import React, { useEffect, useState } from "react";
import Img1 from "../../assets/Images/img1.jpg";
import email from "../../assets/Images/email.png";
import passwordimg from "../../assets/Images/pass.png";
import axios from "axios";
import { use } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles

const Login = () => {
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");

  const navigate = useNavigate(); // Initialize the navigate hook

  const quote = async () => {
    try {
      const res = await axios.get("https://api.quotable.io/random");
      console.log(res.data.content);
      setData(res.data.content);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    console.log(username, password);
    const data = {
      username,
      password,
    };
    try {
      const res = await axios
        .post(`${import.meta.env.VITE_BASE_URL}/login`, data)
        .then((e) => {
          console.log(e);
          localStorage.setItem("access_token", e.data.access);
          localStorage.setItem("role", e.data.roleName); // Store role
          localStorage.setItem("data", JSON.stringify(e.data));
        });

      toast.success("Login successful!");

      // Navigate after the toast
      setTimeout(() => {
        navigate("/home");
      }, 2000); // Delay navigation to give the toast time to show
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPass(value);
    }
  };

  useEffect(() => {
    quote();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <div className="container bg-[#dfe2e8] h-[100vh] min-w-[100vw] flex items-center justify-center">
        <div className="container bg-white max-w-[75vw] flex h-[70vh]">
          <div className="imgside md:w-[50%] h-[100%] ">
            <img
              src={Img1}
              alt="background"
              className="w-[100%] h-[100%] hidden md:block"
            />
          </div>

          <div className="formside w-[100%] md:w-[50%] text-center mt-[10rem]">
            <h2 className="font-semibold text-center text-3xl">Welcome Back</h2>
            <p className="text-gray-400 text-sm">Please enter your details</p>

            <form
              action=""
              className="max-w-[40%] mx-auto mt-[2rem]"
              onSubmit={handleLogin}
            >
              <div className="row my-4 w-full flex justify-center items-center border rounded-md">
                <img
                  src={email}
                  alt="email"
                  className="h-[1.2rem] w-[1.2rem] m-2"
                />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                  className="w-full p-2 border-l-2 text-md focus:outline-none"
                  value={username}
                  onChange={handleChange}
                />
              </div>

              <div className="row my-4 w-full flex justify-center items-center border rounded-md">
                <img
                  src={passwordimg}
                  alt="password"
                  className="h-[1.2rem] w-[1.2rem] m-2"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="w-full p-2 border-l-2 text-md focus:outline-none"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div className="row my-5 w-full">
                <input
                  type="submit"
                  value="Login"
                  className="bg-[#0066ff] text-white p-3 w-full rounded-lg font-semibold cursor-pointer"
                />
              </div>
            </form>

            <div className="quotes max-w-[40%] my-8 mx-auto">
              <p className="text-gray-400 text-sm">
                {/* Obstacles are those things you see when you take your eyes off the goal. */}
                {data}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
