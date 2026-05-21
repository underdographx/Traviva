import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ExperienceDetails from "./pages/ExperienceDetails";
import TripDetails from "./pages/TripDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutPage from "./pages/AboutPage";
import { AuthProvider } from "./context/AuthContext";
export default function App(){

  return(

    <AuthProvider>

      <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/experience/:name"
          element={<ExperienceDetails />}
        />

        <Route
          path="/trip/:slug"
          element={<TripDetails />}
        />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/about" element={<AboutPage />} />

      </Routes>

      </BrowserRouter>

    </AuthProvider>
  );
}
