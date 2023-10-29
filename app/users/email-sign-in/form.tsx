"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { apiClient } from "@apis/network/client";
import { SignInBodyDto } from "@apis/dtos/auth/sign-in.dto";
import Input from "@components/common/input";
import FormError from "@components/common/formError";

export type SignInFormType = {
  email: string;
  password: string;
  confirmPassword: string;
};
const EmailSignInForm = () => {
  const authService = apiClient.auth;

  const validationSchema = Joi.object<SignInFormType>({
    email: Joi.string()
      .required()
      .pattern(
        new RegExp(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      )
      .messages({
        "string.pattern.base": "지원되지 않는 이메일 형식입니다",
      }),
    password: Joi.string()
      .min(8)
      .message("패스워드는 8자리 이상이어야 합니다.")
      .pattern(
        new RegExp(
          /(?=.*[!@#$%^&\*\(\)_\+\-=\[\]\{\};\':\"\\\|,\.<>\/\?]+)(?=.*[a-zA-Z]+)(?=.*\d+)/
        )
      )
      .message("패스워드에 특수문자, 문자, 숫자가 반드시 포함되어야 합니다."),
    confirmPassword: Joi.string()
      .optional()
      .min(8)
      .message("패스워드는 8자리 이상이어야 합니다.")
      .pattern(
        new RegExp(
          /(?=.*[!@#$%^&\*\(\)_\+\-=\[\]\{\};\':\"\\\|,\.<>\/\?]+)(?=.*[a-zA-Z]+)(?=.*\d+)/
        )
      )
      .message("패스워드에 특수문자, 문자, 숫자가 반드시 포함되어야 합니다."),
  });

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormType>({
    mode: "onChange",
    resolver: joiResolver(validationSchema),
  });

  const signIn = async ({ email, password }: SignInBodyDto) =>
    authService.signIn({ email, password });

  const onSubmit = () => {
    const { email, password, confirmPassword } = getValues();
    signIn({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-solid border-gray-300 w-2/3 p-10"
    >
      <Input
        register={register("email", {
          required: "이메일을 입력하세요.",
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        type="email"
        htmlFor="email"
        labelText="이메일 *"
        placeholder="ID@example.com"
      />
      {errors.email?.message && (
        <FormError errorMessage={errors.email.message} />
      )}
      <Input
        register={register("password", {
          required: "비밀번호를 입력하세요.",
          minLength: 8,
          pattern:
            /(?=.*[!@#$%^&\*\(\)_\+\-=\[\]\{\};\':\"\\\|,\.<>\/\?]+)(?=.*[a-zA-Z]+)(?=.*\d+)/,
        })}
        type="password"
        htmlFor="password"
        labelText="비밀번호 *"
        placeholder="영문, 숫자, 특수문자 2가지 조합 8~15자"
      />
      {errors.password?.message && (
        <FormError errorMessage={errors.password.message} />
      )}
      <div className="flex items-center justify-center">
        <input
          type="submit"
          value="로그인"
          className={`mt-4 text-white w-full py-4 rounded-md ${
            isValid ? "bg-blue-500" : "bg-blue-200"
          }`}
        />
      </div>
    </form>
  );
};

export default EmailSignInForm;
