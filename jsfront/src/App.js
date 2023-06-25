import React from "react";
import * as myRoutes from "./constants/Routes";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//PAGES
import ApptBookingForm from "./pages/ApptBookingForm";
import Home from "./pages/Home";
import Login from "./pages/Login"
import NavBar from "./pages/Navbar"

//THEME
import customTheme from "./theme";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path={myRoutes.HOME_PAGE} element={<Home />} />
          <Route path={myRoutes.APPT_BOOK_PAGE} element={<ApptBookingForm />} />
          <Route path={myRoutes.LOGIN_PAGE} element={<Login />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
