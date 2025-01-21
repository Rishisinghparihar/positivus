import React from "react";
const EmailInput = () => {
  return (
    <div>
      <input
        type="email"
        className="w-48 h-[3.4rem] border p-4 border-gray-300 bg-gray-800 rounded-2xl"
        placeholder="Email"
        defaultValue="example@gmail.com"
      ></input>
    </div>
  );
};

export default EmailInput;
