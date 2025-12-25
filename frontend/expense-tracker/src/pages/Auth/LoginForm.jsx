 import React, { useContext, useState } from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      {/* Left panel container */}
      <div
        className="w-full max-w-md mx-auto flex flex-col justify-center px-6 py-10 md:h-[500px] bg-green-200"
         // ✅ Matches screenshot green
      >
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A3D2F] flex items-center gap-2 text-center md:text-left">
          Track Your Finances <span role="img" aria-label="chart"> </span>
        </h3>
       <p className="text-sm md:text-base mt-1 mb-8 text-[hsl(156,40%,17%)] font-medium text-center md:text-left">
  Secure your wallet’s future — <span className="font-semibold text-[#1A3D2F]">login now</span>.
</p>



        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label={
              <span className="text-sm md:text-base font-semibold text-[#1A3D2F]">
                Email Address
              </span>
            }
            placeholder="john@example.com"
            type="text"
            className="rounded-lg border border-[#1A3D2F] px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#1F5C47] focus:border-[#1F5C47] transition duration-200"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label={
              <span className="text-sm md:text-base font-semibold text-[#1A3D2F]">
                Password
              </span>
            }
            placeholder="Minimum 8 characters"
            type="password"
            className="rounded-lg border border-[#1A3D2F] px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#1F5C47] focus:border-[#1F5C47] transition duration-200"
            showPasswordToggle
          />

          {error && <p className="text-red-500 text-xs">{error}</p>}

          {/* Login button */}
          <button
            type="submit"
            className="bg-[#133D2C] text-white font-semibold py-3 rounded-full hover:bg-[#1F5C47] transition-colors"
          >
            LOGIN
          </button>

          {/* Sign up link */}
          <p className="text-sm text-[#1A3D2F] text-center">
            Don’t have an account?{" "}
            <Link className="font-semibold" style={{ color: "#1F5C47" }} to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
