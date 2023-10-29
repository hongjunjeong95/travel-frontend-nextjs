import SignComponent from "@/app/components/common/signComponent";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <SignComponent>
      <Link
        href={"/users/email-sign-in"}
        className="mt-4 p-5 bg-gray-200 w-64 text-center rounded-md"
      >
        이메일로 로그인
      </Link>
    </SignComponent>
  );
};

export default SignUp;
