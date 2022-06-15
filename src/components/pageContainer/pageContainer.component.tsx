import React from "react";

import "./pageContainer.component.styles.scss";

type PageContainerProps = { children: JSX.Element | JSX.Element[] };

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className='pageContainer' style={{ height: "100vh" }}>
      {children}
    </div>
  );
};

export default PageContainer;
