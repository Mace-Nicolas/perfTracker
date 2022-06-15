import React from "react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div
      className='w-full text-4xl tracking-wider text-white h-36 flex items-center pl-12'
      style={{ backgroundColor: "#222222" }}
    >
      {title}
    </div>
  );
};

export default SectionTitle;
