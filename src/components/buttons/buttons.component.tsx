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
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <button className='addButton tracking-wider' onClick={onClick}>
      {title}
    </button>
  );
};
