import React from "react";

import SectionTitle from "../../components/sectionTitle/sectionTitle.component";
import UserInfos from "../../components/userInfos/userInfos.component";

type Props = {};

const UserPage = (props: Props) => {
  return (
    <div className='w-full h-full'>
      <SectionTitle title='User settings' />
      <div
        className='w-full '
        style={{ backgroundColor: "#E9E9E9", height: "85%" }}
      >
        <UserInfos />
      </div>
    </div>
  );
};

export default UserPage;
