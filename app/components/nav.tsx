import { useMeQuery } from "common/hooks/useMe";
import Link from "next/link";
import React from "react";

export default async function Nav() {
  const data = await useMeQuery();

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
      <div className="flex justify-between w-80 items-center ">
        {data ? (
          <>
            <Link
              href={"/users/sign-in"}
              className="hover:bg-gray-200 text-gray-500 px-4 py-2 transition-all duration-400"
            >
              위시리스트
            </Link>
            <Link
              href={"/users/sign-in"}
              className="hover:bg-gray-200 text-gray-500 px-4 py-2 transition-all duration-400"
            >
              내 여행
            </Link>
            <Link
              href={"/users/sign-in"}
              className="hover:bg-gray-200 text-gray-500 px-4 py-2 transition-all duration-400"
            >
              메시지
            </Link>
            <Link
              href={"/users/sign-in"}
              className="hover:bg-gray-200 text-gray-500 px-4 py-2 transition-all duration-400"
            >
              알림
            </Link>
            <Link
              href={"/users/sign-in"}
              className="hover:bg-gray-200 text-gray-500 px-4 py-2 transition-all duration-400"
            >
              프로필
            </Link>
          </>
        ) : (
          <>
            <div className="hover:bg-gray-200 text-gray-500 px-4 py-2 transition-all duration-400">
              파트너 로그인
            </div>
            <Link
              href={"/users/sign-in"}
              className="hover:bg-gray-200 text-gray-500 px-4 py-2 transition-all duration-400"
            >
              로그인
            </Link>
            <Link
              href={"/users/sign-up"}
              className="hover:bg-blue-100 border-blue-500 text-blue-500 border-solid border py-2 px-4 transition-all duration-400"
            >
              회원가입
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
