import React from "react";
import "./inputs.component.styles.scss";

export const InputBasic = ({
  name,
  label,
  type,
  value,
}: {
  name: string;
  label: string;
  type: string;
  value: string | number;
}) => {
  return (
    <label className='flex flex-col w-1/3'>
      {label} :
      <input
        readOnly
        type={type}
        name={name}
        className='inputUserInfo w-full'
        value={value}
      />
    </label>
  );
};

export const InvisibleInput = ({
  name,
  label,
  type,
  value,
  onChange,
}: {
  name: string;
  label: string;
  type: string;
  value: string | number;
  onChange: (e: any) => void;
}) => {
  return (
    <label
      className='invisibleInputLabel flex flex-col w-full text-gray-400 text-sm font-mono  tracking-wider'
      style={{ color: "rgba(150, 150, 150, 1)" }}
    >
      {label} :
      <input
        type={type}
        name={name}
        className='invisibleInput w-full text-lg'
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

// Selects

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
      <select className='inputUserInfo flex flex-col w-full'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='unknown'>I don't want to answer</option>
      </select>
    </label>
  );
};
