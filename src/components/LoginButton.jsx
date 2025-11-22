"use client";
import React from "react";
import { signIn } from "next-auth/react";
const LoginButton = () => {
  return (
    <>
      <button className="btn btn-outline" onClick={() => signIn()}>
        Login
      </button>
    </>
  );
};

export default LoginButton;
