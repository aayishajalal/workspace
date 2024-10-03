import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button className=" bg-green-500 px-4 py-2">{name}</button>
    </>
  );
};

export default Button;
