// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Store/Reducers/UserReducer";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.allUsers);
  //   console.log(loggedInUser);

  const handleDeletion = () => {
    // const filteredUsers = JSON.parse(localStorage.getItem("allUsers")).filter(
    //   (user) => user.email !== loggedInUser.email
    // );

    // localStorage.setItem("allUsers", JSON.stringify(filteredUsers));
    // Dispatch(refreshAllUsers());
    // localStorage.removeItem("loggedInUser");
    Dispatch(deleteUser(loggedInUser));
    Navigate("/login");
  };
  return (
    <div className="w-full h-full bg-white p-10 pb-20 overflow-y-auto">
      <div className="w-3/4 h-5/6 bg-purple-100 rounded-full m-auto flex flex-col justify-start items-center p-10 shadow-2xl">
        <div className="w-28 h-28 rounded-full bg-purple-600 p-1">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png"
            alt="user-img"
            className="h-full w-full object-contain hover:scale-110"
          />
        </div>
        <h1 className="text-xl font-semibold text-secondary mb-20">
          {loggedInUser.name}
        </h1>
        <h2 className="text-xl font-semibold text-secondary">
          Email: {loggedInUser.email}
        </h2>
        <h2 className="text-xl font-semibold text-secondary mb-10">
          Password: {loggedInUser.password}
        </h2>
        <div className="w-2/4 h-1/4 bg-purple-200 rounded-full flex justify-between p-1">
          <button className="px-3 py-1 rounded-full bg-purple-600 text-white font-semibold hover:scale-105">
            Edit Profile
          </button>
          <button
            onClick={handleDeletion}
            className="px-3 py-2 rounded-full bg-purple-600 text-white font-semibold hover:scale-105"
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
