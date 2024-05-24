import React from 'react'
import { Link } from "react-router-dom";

const Signup = () => {
  const handleClick = () => {
    console.log("Input")
  }
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto flex flex-col justify-center items-center">
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-dark">
            Create your free account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto max-w-sm">
          <form className="space-y-6">
            <div className="flex items-center gap-6">
              <div>
                <label htmlFor="first_name" className="block text-gray-dark">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first_name"
                    name="firstname"
                    type="firstname"
                    required
                    className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                    onInput={handleClick}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last_name" className="block text-gray-dark">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last_name"
                    name="lastname"
                    type="lastname"
                    required
                    className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                    onInput={handleClick}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-dark">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-dark"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
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
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-teal hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup