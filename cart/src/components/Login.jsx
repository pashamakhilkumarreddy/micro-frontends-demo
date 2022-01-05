import React, { useState, useEffect } from "react";
import { useIsLoggedIn, login } from "../cart";

const Login = () => {
  const loggedIn = useIsLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("stacy");
  const [password, setPassword] = useState("kkmUhEb3fTg");

  if (loggedIn) return null;
  return (
    <>
      <span
        className="cursor-pointer"
        onClick={() => setShowLogin((val) => !val)}
      >
        <i className="ri-fingerprint-line text-2xl" id="showLogin"></i>
      </span>
      {showLogin ? (
        <div
          className="absolute p-3 bg-white border-4 border-blue-800"
          style={{
            width: "20rem",
            top: "2rem",
            left: "-18rem",
          }}
        >
          <form className="p-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-3 border text-black text-sm border-gray-400 p-2 rounded-md w-full"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3 border text-black text-sm border-gray-400 p-2 rounded-md w-full"
            />

            <button
              type="button"
              id="loginBtn"
              className="cursor-pointer bg-green-500 text-white py-2 px-5 rounded-md w-full"
              onClick={() => login(username, password)}
            >
              Login
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default Login;
