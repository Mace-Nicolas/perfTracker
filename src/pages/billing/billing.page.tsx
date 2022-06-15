import React from "react";
import SectionTitle from "../../components/sectionTitle/sectionTitle.component";

type Props = {};

const BillingPage = (props: Props) => {
  return (
    <div className='w-full h-full'>
      <SectionTitle title='Billing' />
      <div
        className='w-full '
        style={{ backgroundColor: "#E9E9E9", height: "85%" }}
      >
        <p>test</p>
      </div>
    </div>
  );
};

export default BillingPage;
