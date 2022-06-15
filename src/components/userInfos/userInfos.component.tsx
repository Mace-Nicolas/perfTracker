import React from "react";

import "./userInfos.component.styles.scss";
import { InputBasic, SelectBasic } from "../inputs/inputs.component";
import { DividerLight } from "../dividers/dividers.component";
import SubTitle from "../subTitle/subTitle.component";

type Props = {};

const UserInfos = (props: Props) => {
  return (
    <div
      className='w-full '
      style={{ backgroundColor: "#E9E9E9", height: "85%" }}
    >
      <div className='account-infos py-8'>
        <SubTitle title='Account Infos' />
        <DividerLight />
        <form className='user-infos-account '>
          <div className='flex flex-row w-full justify-between my-6'>
            <InputBasic type='text' label='Username' name='username' />
            <InputBasic type='email' label='Email' name='email' />
          </div>
        </form>
        <p className='underline underline-offset-2'>Change Password</p>
      </div>
      <div className='account-infos'>
        <SubTitle title='Health Data' />
        <DividerLight />
        <form className='user-infos-account'>
          <div className='flex flex-row w-full  justify-between my-6'>
            <SelectBasic type='text' label='Gender' name='gender' />
            <InputBasic type='number' label='Age' name='age' />
          </div>
          <div className='flex flex-row w-full  justify-between my-6'>
            <InputBasic type='number' label='Weight ( kg ) ' name='weight' />
            <InputBasic type='number' label='Height ( cm ) ' name='height' />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='account-infos py-8'>
        <SubTitle title='Account settings' />
        <DividerLight />
        <p className='underline underline-offset-2'>Delete Account</p>
      </div>
    </div>
  );
};

export default UserInfos;
