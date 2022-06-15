import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import PageContainer from "./components/pageContainer/pageContainer.component";

import BillingPage from "./pages/billing/billing.page";
import MediaPage from "./pages/media/media.page";
import PerfomancesPage from "./pages/perfomances/performances.page";
import UserPage from "./pages/user/user.page";

const App = () => {
  return (
    <PageContainer>
      <Navbar />

      <Routes>
        <Route path='/performances' element={<PerfomancesPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/billing' element={<BillingPage />} />
        <Route path='/media' element={<MediaPage />} />
      </Routes>
    </PageContainer>
  );
};

export default App;
