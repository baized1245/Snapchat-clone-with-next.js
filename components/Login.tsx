import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-medium my-2">
        Sign Up to Snapchat
      </h1>
      <Button className="w-full my-4 gap-2">
        <FaGithub size={24} /> Sign Up with Github
      </Button>
      <p>
        New t Snapchat?
        <Link href={"/signup"} className="underline">
          Signup
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
