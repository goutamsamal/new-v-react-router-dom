import React from "react";
import "./../styles/global.css";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import PricingPage from "./pricing";
import AuthPage from "./auth";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import LegalPage from "./legal";
import { Routes, Route, BrowserRouter } from "./../util/router";
import PurchasePage from "./purchase";
import FirebaseActionPage from "./firebase-action";
import NotFoundPage from "./404";
import "./../util/analytics";
import Chat from "./../components/Chat";
import { AuthProvider } from "./../util/auth";
import { QueryClientProvider } from "./../util/db";
// import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Chat />
        <BrowserRouter>
          <>
            <Navbar />

            <Routes>
              <Route exact path="/" element={ <IndexPage /> } />

              <Route exact path="/about" element={AboutPage} />

              <Route  path="/pricing" exact element={ <PricingPage/> } />

              <Route exact path="/auth/:type" element={AuthPage} />

              <Route exact path="/dashboard" element={DashboardPage} />

              <Route exact path="/settings/:section" element={SettingsPage} />

              <Route exact path="/legal/:section" element={LegalPage} />

              <Route exact path="/purchase/:plan" element={PurchasePage} />

              <Route
                exact
                path="/firebase-action"
                element={FirebaseActionPage}
              />

              <Route element={NotFoundPage} />
            </Routes>
          </>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
