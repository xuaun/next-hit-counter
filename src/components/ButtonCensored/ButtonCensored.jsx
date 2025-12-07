"use client";
import React from "react";

function ButtonCensored({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);

  function handleClick() {
    setIsCensored(!isCensored);
  }

  return (
    <button
      onClick={handleClick}
      className={isCensored ? "censored" : ""}
    >
      {children}
    </button>
  );
}

export default ButtonCensored;
