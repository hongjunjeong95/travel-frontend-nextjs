"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";

import { joiResolver } from "@hookform/resolvers/joi";
import Input from "@components/common/input";
import FormError from "@components/common/formError";
import { clientApi } from "@client/apis/network/client.api";
import { SignUpBodyDto } from "@client/apis/dtos/auth/sign-up.dto";
import { UserRole } from "apis/common/entities/users/user.entity";

export type SignUpFormType = {
  email: string;
  password: string;
  confirmPassword: string;
};
const EmailSignUpForm = () => {
  const authService = clientApi.auth;

  const validationSchema = Joi.object<SignUpFormType>({
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
  } = useForm<SignUpFormType>({
    mode: "onChange",
    resolver: joiResolver(validationSchema),
  });

  const signUp = async ({
    email,
    password,
    confirmPassword,
    role,
  }: SignUpBodyDto) =>
    authService.signUp({ email, password, confirmPassword, role });

  const onSubmit = () => {
    const { email, password, confirmPassword } = getValues();
    signUp({ email, password, confirmPassword, role: UserRole.USER });
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
      <Input
        register={register("confirmPassword", {
          required: "확인 비밀번호를 입력하세요.",
          minLength: 8,
          pattern:
            /(?=.*[!@#$%^&\*\(\)_\+\-=\[\]\{\};\':\"\\\|,\.<>\/\?]+)(?=.*[a-zA-Z]+)(?=.*\d+)/,
        })}
        type="password"
        htmlFor="confirmPassword"
        labelText="비밀번호 확인 *"
        placeholder="비밀번호를 한번 더 입력해주세요."
      />
      {errors.confirmPassword?.message && (
        <FormError errorMessage={errors.confirmPassword.message} />
      )}
      <div className="flex items-center justify-center">
        <input
          type="submit"
          value="회원가입"
          className={`mt-4 text-white w-full py-4 rounded-md ${
            isValid ? "bg-blue-500" : "bg-blue-200"
          }`}
        />
      </div>
    </form>
  );
};

export default EmailSignUpForm;
