import React from 'react'

function Jobsearch() {
  return (
    <div className='h-screen'>
      <h2 className="text-teal-dark text-3xl font-semibold mb-6">Job Search</h2>

      <form className="max-w-md">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3">
            <svg
              className="w-4 h-4 text-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm text-[#888] border border-gray-light rounded-md bg-white focus:border-teal outline-none"
            placeholder="Search job roles and companies"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Jobsearch