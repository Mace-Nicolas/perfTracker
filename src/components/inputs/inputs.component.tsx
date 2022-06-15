import React from "react";
import "./inputs.component.styles.scss";

export const InputBasic = ({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) => {
  return (
    <label className='flex flex-col w-1/3'>
      {label} :
      <input type={type} name={name} className='inputUserInfo w-full' />
    </label>
  );
};

export const SelectBasic = ({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) => {
  return (
    <label>
      {label}
      <select className='inputUserInfo flex flex-col w-1/3'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='unknown'>I don't want to answer</option>
      </select>
    </label>
  );
};
