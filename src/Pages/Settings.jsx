import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteAccountModal from "../Components/DeleteAccountModal";

const Settings = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setConfirmPasswordHidden] = useState(true);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  const handleDeleteModal = () => {
    setShowDeleteAccountModal(true);
  }
  return (
    <section className=" h-screen">
      <div className="max-w-2xl mb-12">
        <h2 className="text-teal-dark text-3xl font-semibold">
          Change password
        </h2>
        <p className="text-gray mb-6">Manage your account password</p>
        <form>
          {/* Current Password */}
          <div>
            <label className="sr-only">Current Password</label>
            <input
              type="password"
              placeholder="Current Password"
              required
              className="border border-gray-light text-gray rounded-md p-3 outline-none focus:ring-[1px] focus:ring-gray w-full"
            />
          </div>
          {/* New Password */}
          <div>
            <label className="sr-only">New Password</label>
            <div className="relative mt-6">
              <button
                type="button"
                title="Show/Hide Password"
                className="text-gray absolute right-3 inset-y-0 my-auto active:text-gray"
                onClick={() => setPasswordHidden(!isPasswordHidden)}
              >
                {isPasswordHidden ? (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
              <input
                type={isPasswordHidden ? "password" : "text"}
                placeholder="New Password"
                required
                className="border border-gray-light text-gray rounded-md p-3 outline-none focus:ring-[1px] focus:ring-gray w-full "
              />
            </div>
          </div>
          {/* Re Enter Password */}
          <div>
            <label className="sr-only">Re Enter Password</label>
            <div className="relative mt-6">
              <button
                type="button"
                title="Show/Hide Password"
                className="text-gray absolute right-3 inset-y-0 my-auto active:text-gray"
                onClick={() =>
                  setConfirmPasswordHidden(!isConfirmPasswordHidden)
                }
              >
                {isConfirmPasswordHidden ? (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
              <input
                type={isConfirmPasswordHidden ? "password" : "text"}
                placeholder="Re enter New Password"
                required
                className="border border-gray-light text-gray rounded-md p-3 outline-none focus:ring-[1px] focus:ring-gray w-full"
              />
            </div>
          </div>
          {/* Cancel and Set New Password buttons */}
          <div className="mt-4 font-semibold gap-4 flex">
            <Link
              to="/dashboard/dashboard"
              className="bg-light-gray text-dark-gray rounded-md py-2 px-4"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-black text-white rounded-md py-2 px-6 flex justify-center items-center gap-3 text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      {/* DELETE USER ACCOUNT */}

      <div>
        <h2 className=" text-3xl font-semibold">Delete Account:</h2>
        <p className="text-gray mb-6">Permanently delete your account.</p>
        <button
          type="submit"
          className="border border-[#af1818] text-[#af1818] rounded-md py-2 px-2.5 flex justify-center items-center gap-3"
          onClick={handleDeleteModal}
        >
          Delete my Account
        </button>
      </div>
      {showDeleteAccountModal && (
        <DeleteAccountModal setDeleteAccountModal={setShowDeleteAccountModal} />
      )}
    </section>
  );
};

export default Settings;
