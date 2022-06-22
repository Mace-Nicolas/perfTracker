import React from "react";

export const FlexContainer = ({
  children,
  width = "80%",
  className,
  flex = "col",
  side = "left",
}: {
  children: JSX.Element | JSX.Element[] | any;
  width?: string;
  className?: string;
  flex?: string;
  side?: string;
}) => {
  return (
    <div
      className={`flex flex-${flex} flex-${side} justify-evenly  ${className}`}
      style={{ width: width }}
    >
      {children}
    </div>
  );
};
