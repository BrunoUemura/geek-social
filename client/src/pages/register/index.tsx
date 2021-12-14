import React from "react";

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="w-1/3 h-1/2 bg-gray-800 flex flex-col justify-around items-center">
        <h1 className="text-white text-3xl uppercase">Sign Up</h1>
        <input
          className="w-2/3 h-10 rounded-sm flex pl-2 bg-gray-700"
          type="text"
          placeholder="username"
        />
        <input
          className="w-2/3 h-10 rounded-sm flex pl-2 bg-gray-700"
          type="text"
          placeholder="password"
        />
        <button
          className="w-2/3 h-10 rounded-sm cursor-pointer text-white bg-gray-700"
          type="submit"
        >
          Sign Up
        </button>
        <span className="text-white">
          Already registered?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline hover:underline-offset-1"
          >
            Sign In
          </a>
        </span>
      </div>
    </div>
  );
};

export default Register;
