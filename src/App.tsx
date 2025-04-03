import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  PublicLayout  from "@/layouts/public-layout";
import  AuthenticationLayout from "@/layouts/auth-layout";
import ProtectRoutes from "@/layouts/protected-routes";
import  MainLayout from "@/layouts/main-layout";

import HomePage  from "@/routes/home";
import SignInPage from "@/routes/sign-in";
import SignUpPage from "@/routes/sign-up";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route index element ={<HomePage />}/>
        </Route>

        {/* Authentication Layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element ={<SignInPage />}/>
          <Route path="/signup/*" element ={<SignUpPage />}/>
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectRoutes><MainLayout /></ProtectRoutes>}>
{/* add all the protected routes  */}


        </Route>
      </Routes>
    </Router>
  );
};

export default App;