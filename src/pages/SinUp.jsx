import React from "react";
import UseForm from "../component/log/hooks/UseForm";

const SinUp = ({ setAuth }) => {
  return (
    <div className="sinup-wepper">
      <UseForm setAuth={setAuth} />
    </div>
  );
};

export default SinUp;
