import React, { useContext, useState } from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { API_PATHS } from "../../utils/apiPaths";
import uploadImage from "../../utils/uploadImage";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";

const SignUpForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle Sign Up Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    // SignUp API Call
    try {
      // Upload image if present
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl,
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
   <div className="w-full max-w-md mx-auto px-4 sm:px-5 py-3 md:py-4 flex flex-col justify-center bg-green-200">



  <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A3D2F] flex items-center gap-2 text-center md:text-left">
  Create Your Account 
  <span 
    role="img" 
    aria-label="spark" 
    className="hidden sm:inline-block"
  >
    ✨
  </span>
</h3>

  <p className="text-sm md:text-base mt-1 mb-8 text-[hsl(156,40%,17%)] font-medium text-center md:text-left">
    Start tracking smarter — <span className="font-semibold text-[#1A3D2F]">sign up today</span>.
  </p>

  <form onSubmit={handleSignUp} className="space-y-5">
    <div className="flex justify-center">
      <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
    value={fullName}
    onChange={({ target }) => setFullName(target.value)}
    label={
      <span className="text-sm md:text-base font-semibold text-[#1A3D2F]">
        Full Name
      </span>
    }
    placeholder="John"
    type="text"
    className="rounded-lg border border-[#1A3D2F] px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#1F5C47] focus:border-[#1F5C47] transition duration-200"
  />

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
</div>

<Input
  value={password}
  onChange={({ target }) => setPassword(target.value)}
  label={
    <span className="text-sm md:text-base font-semibold text-[#1A3D2F]">
      Password
    </span>
  }
  placeholder="Min 8 Characters"
  type="password"
  className="rounded-lg border border-[#1A3D2F] px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#1F5C47] focus:border-[#1F5C47] transition duration-200"
  showPasswordToggle
/>

    {error && <p className="text-red-500 text-xs">{error}</p>}

    <button
      type="submit"
      className="w-full bg-[#133D2C] text-white font-semibold py-3 rounded-full hover:bg-[#1F5C47] transition-colors"
    >
      SIGN UP
    </button>

    <p className="text-[13px] text-slate-800 text-center md:text-left">
      Already have an account?{" "}
      <Link className="font-medium text-primary underline" to="/login">
        Login
      </Link>
    </p>
  </form>
</div>

    </AuthLayout>
  );
};

export default SignUpForm;
