import React from "react";

import "./dividers.component.styles.scss";

export const DividerLight = () => {
  return <div className='divider-light' />;
};
export const ModulableDivider = ({ classNames }: { classNames: string }) => {
  return <div className={`${classNames} modulable-divider`} />;
};

export const DividerStrong = () => {
  return <div className='divider-strong' />;
};
