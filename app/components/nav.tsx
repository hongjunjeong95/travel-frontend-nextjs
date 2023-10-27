import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center mb-5">
      <div className="flex items-center">
        <Link href="/" className="mr-10 text-2xl font-bold">
          TravelApp
        </Link>
        <input
          type="text"
          className="border-black-500 border-solid border-2 p-3"
          placeholder="상품 검색"
        />
      </div>
      <div className="flex justify-between w-1/4 items-center">
        <div>파트너 로그인</div>
        <div>로그인</div>
        <div className="border-blue-400 text-blue-400 border-solid border py-2 px-4">
          회원가입
        </div>
      </div>
    </nav>
  );
};

export default Nav;
