import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import Navbar from "../navbar/navbar.component";

import PerformancePage from "../../pages/perfomances/performances.page";
import UserPage from "../../pages/user/user.page";
import BillingPage from "../../pages/billing/billing.page";
import MediaPage from "../../pages/media/media.page";
import { LocalizationProvider } from "@mui/x-date-pickers";

const NavWrapper = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/performances' element={<PerformancePage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/billing' element={<BillingPage />} />
        <Route path='/media' element={<MediaPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default NavWrapper;
