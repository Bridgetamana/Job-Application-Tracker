import React from "react";

const DeleteAccountModal = ({setDeleteAccountModal}) => {
    const handleCancel = () => {
      setDeleteAccountModal(false);
    };
  return (
    <div className="fixed inset-0 bg-[#000]/50 z-40 flex justify-center items-center">
      <div className="bg-white rounded-md py-8 px-6">
        <div className="flex justify-between mb-2 items-center">
          <h3 className="font-medium text-lg">Confirm Delete</h3>
          <button
            className="font-medium text-gray hover:bg-gray-light/90 hover:text-gray-dark rounded-md py-1.5 px-2"
            onClick={handleCancel}
          >
            x
          </button>
        </div>
        <div className="mb-8 text-gray pr-8">
          <p>Are you sure you want to delete account?</p>
        </div>
        <div className="flex gap-4 justify-end">
          <button className="py-2 px-3 text-sm font-medium text-center text-white bg-error rounded-md">
            Delete
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
