import React from "react";
import { Routes, Route } from "react-router-dom";

import ContextProvider from "./context";

import PageContainer from "./components/pageContainer/pageContainer.component";
import NavWrapper from "./components/navWrapper/navWrapper.component";

import LoginPage from "./pages/login/login.page";

const App = () => {
  return (
    <ContextProvider>
      <PageContainer>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/*' element={<NavWrapper />} />
        </Routes>
      </PageContainer>
    </ContextProvider>
  );
};

export default App;
