import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validatePassword = (password) => {
    const isValidLength = password.length > 5;
    const hasNumber = /\d/.test(password);
    const hasAlphabet = /[a-zA-Z]/.test(password);

    if (!isValidLength) {
      return "Password must be longer than 5 characters.";
    }
    if (!hasNumber) {
      return "Password must contain at least one number.";
    }
    if (!hasAlphabet) {
      return "Password must contain at least one letter.";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const errorMessage = validateEmail(newEmail);
    setEmailError(errorMessage);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/login");
  };

  return (
    <div className="h-screen lg:flex max-w-screen-lg mx-auto gap-16 w-full py-12 px-4">
      <div className="lg:w-1/2 max-w-lg mx-auto md:pt-10">
        <h2 className="mb-10 mt-6 text-4xl font-semibold">
          Keep your job applications organized
        </h2>
        <div>
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label htmlFor="name" className="p-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name...."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-lg outline-none py-2 px-2.5 mt-2 text-gray-dark shadow-sm border border-gray"
              />
            </div>
            <div>
              <label htmlFor="email" className="p-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
                autoComplete="email"
                className="block w-full rounded-lg outline-none py-2 px-2.5 mt-2 text-gray-dark shadow-sm border border-gray"
              />
              {emailError && (
                <p className="text-[#c93434] text-sm mt-2">{emailError}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="p-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="**********"
                value={password}
                onChange={handlePasswordChange}
                required
                className="block w-full rounded-lg outline-none py-2 px-2.5 mt-2 text-gray-dark shadow-sm border border-gray"
              />
              {passwordError && (
                <p className="text-[#c93434] text-sm mt-2">{passwordError}</p>
              )}
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-black p-3 text-sm font-semibold text-white mb-2"
              >
                Create Account
              </button>
              <p className="text-sm text-dark-gray">
                Already have an account?{" "}
                <Link to="/login" className="underline hover:no-underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
