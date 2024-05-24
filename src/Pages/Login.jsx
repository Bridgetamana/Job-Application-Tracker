import React from 'react'
import { TbBriefcaseFilled } from "react-icons/tb";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:max-w-sm flex flex-col justify-center items-center">
          <span className="text-4xl rounded-full">
            <TbBriefcaseFilled />
          </span>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-dark">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-dark">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-gray-dark"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-gray hover:text-teal "
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-dark"
              >
                <Link to="/dashboard">Login</Link>
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-teal hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login