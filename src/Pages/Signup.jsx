import { Link } from "react-router-dom";
import Illustration from "../assets/img/Illustration-person.png";

const Signup = () => {
  return (
    <div className="h-screen lg:flex max-w-screen-lg mx-auto gap-16 w-full py-12 px-4">
      <div className="lg:w-1/2 max-w-lg mx-auto">
        <h2 className="mb-10 mt-6 text-4xl font-semibold">
          Keep your job applications organized
        </h2>
        <div>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className=" p-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name...."
                required
                className="block w-full rounded-lg outline-none py-2 px-2.5 mt-2 text-gray-dark shadow-sm border  border-gray"
              />
            </div>
            <div>
              <label htmlFor="name" className=" p-2">
                Email
              </label>
              <input
                type="text"
                id="name"
                placeholder="youremail@gmail.com"
                required
                autoComplete="email"
                className="block w-full rounded-lg outline-none py-2 px-2.5 mt-2 text-gray-dark shadow-sm border  border-gray"
              />
            </div>
            <div>
              <label htmlFor="name" className=" p-2">
                Password
              </label>
              <input
                type="text"
                id="name"
                placeholder="**********"
                required
                className="block w-full rounded-lg outline-none py-2 px-2.5 mt-2 text-gray-dark shadow-sm border  border-gray"
              />
            </div>
            <div className="pt-4">
              <button className="flex w-full justify-center rounded-lg bg-black p-3 text-sm font-semibold text-white mb-2">
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
      <div className="flex-1 hidden lg:flex">
        <img src={Illustration} alt="Person sitting at a desk" />
      </div>
    </div>
  );
}

export default Signup