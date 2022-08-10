import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";

// 벨리데이션 정규식 표현
const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidId: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
};

const UseForm = () => {
  // register : 사용하고 있는 모든 input에 대하여 레지스터 해줘야 한다.
  // getValues : value를 얻어 오기 위한 함수
  // formState : 현재 form의 state를 보기위한 함수
  // trigger : 벨리데이션 검사
  const { register, handleSubmit, setFocus, getValues, formState, trigger } =
    useForm({
      mode: "onBlur",
    });

  return (
    <div>
      <FormInput />
    </div>
  );
};

export default UseForm;
