import Input from "@/app/components/common/input";
import React from "react";

const EmailSignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="border border-solid border-gray-300 w-2/3 p-10">
        <Input
          type="text"
          htmlFor="name"
          labelText="이름 *"
          placeholder="이름을 입력해주세요"
        />
        <Input
          type="email"
          htmlFor="email"
          labelText="이메일 *"
          placeholder="ID@example.com"
        />
        <Input
          type="password"
          htmlFor="password"
          labelText="비밀번호 *"
          placeholder="영문, 숫자, 특수문자 2가지 조합 8~15자"
        />
        <Input
          type="password"
          htmlFor="confirmPassword"
          labelText="비밀번호 확인 *"
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="회원가입"
            className="mt-4 bg-blue-200 text-white w-full py-4 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default EmailSignUp;
