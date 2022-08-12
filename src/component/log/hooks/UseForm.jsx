import React, { useEffect } from "react";
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

  useEffect(() => {
    setFocus("id");
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // 모달
  };
  return (
    <>
      <form
        className="sinup"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <FormInput
          id={"id"}
          label={"아이디"}
          errorMsg={formState.errors["id"]?.message}
          inputProps={{
            type: "text",
            placeholder: "아이디를 입력해주세요.",
            ...register("id", {
              //id 라는 유니크한 값을 구하기 위해
              pattern: {
                // 벨리데이션 값
                valeu: ID_REGEX,
                message: ERROR_MSG.invalidId,
              },
              required: ERROR_MSG.required, //필수 정보
            }),
          }}
        />
        <FormInput
          id={"pw"}
          label={"비밀번호"}
          errorMsg={formState.errors["pw"]?.message}
          inputProps={{
            type: "password",
            placeholder: "비밀번호를 입력해주세요.",
            autoComplete: "off",
            ...register("pw", {
              pattern: {
                value: PW_REGEX,
                message: ERROR_MSG.invalidPw,
              },
              required: ERROR_MSG.required,
              // onBlur 가 일어났을때 트리거 콜백 함수 실행
              onBlur: () => trigger("confirmPw"),
            }),
          }}
        />
        <FormInput
          id={"confirmPw"}
          label={"비밀번호 확인"}
          errorMsg={formState.errors["confirmPw"]?.message}
          inputProps={{
            type: "password",
            placeholder: "비밀번호를 확인을 입력해주세요.",
            autoComplete: "off",
            ...register("confirmPw", {
              validate: {
                sameWithPw: (V) =>
                  V === getValues("pw") || ERROR_MSG.invalidConfirmPw,
              },
              required: ERROR_MSG.required,
            }),
          }}
        />
        <div>
          <input id="submit" type="submit" value="가입하기" />
        </div>
      </form>
    </>
  );
};

export default UseForm;
