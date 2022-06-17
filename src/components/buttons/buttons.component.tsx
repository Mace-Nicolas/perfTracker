import React from "react";

import "./buttons.component.styles.scss";

export const CategoryButton = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "activeCatButton" : "unactiveCatButton"
      } categoryButton tracking-wider`}
    >
      {title}
    </button>
  );
};

export const AddButton = ({
  title,
  onClick,
  width,
  height,
}: {
  title: string;
  onClick: () => void;
  width?: string;
  height?: string;
}) => {
  return (
    <button
      className='addButton tracking-wider'
      onClick={onClick}
      style={{ width: width, height: height }}
    >
      {title}
    </button>
  );
};
export const CancelButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <button className='cancelButton tracking-wider' onClick={onClick}>
      {title}
    </button>
  );
};
export const LoginButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <button className='loginButton tracking-wider my-4' onClick={onClick}>
      {title}
    </button>
  );
};
