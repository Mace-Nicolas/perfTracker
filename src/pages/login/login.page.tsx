import React, { useState } from "react";
import { LoginButton } from "../../components/buttons/buttons.component";
import { ModulableDivider } from "../../components/dividers/dividers.component";
import { InvisibleInput } from "../../components/inputs/inputs.component";

import "./login.page.styles.scss";

const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({
    email: "mace_nicolas@icloud.com",
    password: "*******",
  });
  return (
    <div className='loginPage-container'>
      <img src={"./logo.png"} alt='logo' width={200} />
      <form
        className='loginForm'
        method='POST'
        onSubmit={(e: any) => e.preventDefault()}
      >
        <ModulableDivider classNames='w-full mt-2 mb-4' />
        <InvisibleInput
          name='email'
          label='EMAIL'
          type='email'
          onChange={(e: any) =>
            setLoginForm({ ...loginForm, email: e.target.value })
          }
          value={loginForm.email}
        />
        <ModulableDivider classNames='w-full my-4' />
        <InvisibleInput
          name='password'
          label='PASSWORD'
          type='password'
          onChange={(e: any) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          value={loginForm.password}
        />

        <LoginButton
          title='Login'
          onClick={() => console.log("submitting form")}
        />
      </form>
    </div>
  );
};

export default LoginPage;
