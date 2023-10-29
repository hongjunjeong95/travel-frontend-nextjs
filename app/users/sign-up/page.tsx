import SignComponent from "@components/common/signComponent";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <SignComponent>
      <Link
        href={"/users/email-sign-up"}
        className="mt-4 p-5 bg-gray-200 w-64 text-center rounded-md"
      >
        이메일로 회원가입
      </Link>
    </SignComponent>
  );
};

export default SignUp;
