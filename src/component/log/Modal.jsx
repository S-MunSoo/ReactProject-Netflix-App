import React from "react";
import { forwardRef } from "react";

// import { useNavigate } from "react-router-dom";

const Modal = forwardRef(({ getValues }, ref) => {
  // const navigate = useNavigate();
  const handlerClick = (type) => {
    if (type === "approve") {
      window.alert("Welcom My Netifilx 🥳 ");
    } else if (type === "cancel") {
      ref.current.close();
    }
  };
  return (
    <>
      <dialog id="modal" ref={ref} className="login-modal">
        <div className="modal-content">
          <div className="modal-body">
            <h3>입력하신 내용을 확인해주세요.</h3>
          </div>
          <div className="text-left">
            아이디
            <p id="confirm-id">{getValues().id}</p>
            <div>
              비밀번호
              <p id="confirm-pw">{getValues().pw}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            id="approve"
            type="button"
            onClick={() => handlerClick("approve")}
          >
            로그인
          </button>
        </div>
        <div>
          <button
            id="cancel"
            type="button"
            onClick={() => handlerClick("cancel")}
          >
            취소
          </button>
        </div>
      </dialog>
    </>
  );
});

export default Modal;
