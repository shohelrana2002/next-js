"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();
  const loggedUser = true;
  const handleAddress = () => {
    if (loggedUser) {
      return router.push("/about/address");
    } else {
      return router.push("/");
    }
  };
  return (
    <div>
      <p>About Pages</p>

      <div>
        <Link
          href="/about/address"
          className="bg-orange-600 px-5 py-2 rounded-xl  "
        >
          Address
        </Link>
      </div>

      <button onClick={handleAddress} type="button" className="">
        Address Page
      </button>
    </div>
  );
};

export default AboutPage;
