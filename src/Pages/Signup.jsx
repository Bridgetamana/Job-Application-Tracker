import React from 'react'
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your free account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div className="flex items-center gap-6">
              <div>
                <label
                  htmlFor="firstname"
                  className="block leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="firstname"
                    autoComplete="firstname"
                    required
                    className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-900 shadow-sm focus:ring-[1px] focus:ring-teal"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    autoComplete="lastname"
                    required
                    className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-900 shadow-sm focus:ring-[1px] focus:ring-teal"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-900 shadow-sm focus:ring-[1px] focus:ring-teal"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-900 shadow-sm focus:ring-[1px] focus:ring-teal"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-dark"
              >
               Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-teal hover:underline"
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