import React from "react";

type IconContainerProps = {
  isUserIcon?: boolean;
  children: JSX.Element | JSX.Element[];
};

const IconContainer = ({
  isUserIcon = false,
  children,
}: IconContainerProps) => (
  <span
    className='my-10 p-2 shadow-lg'
    style={{
      backgroundColor: "#D9D9D9",
      borderRadius: isUserIcon ? "50%" : "10px",
    }}
  >
    {children}
  </span>
);

export default IconContainer;
