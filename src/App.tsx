import {
  Home,
  Videos,
  News,
  WeAre,
  Album,
  Cosquin,
  Cordura,
  CircularConcert,
  Contact,
  Footer,
} from "./sections/index";
import NavLarge from "./navigation/NavLarge";
import NavSmall from "./navigation/NavSmall";
import { Routes, Route, useNavigate } from "react-router-dom";
import Concert from "./concert/Concert";
import { useEffect } from "react";

function App() {
  const RedirectToHome = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/");
    }, [navigate]);
    return null;
  };

  return (
    <>
      <Routes>
        <Route path="/thames" element={<Concert />} />
        <Route
          path="/"
          element={
            <>
              <NavLarge />
              <NavSmall />
              <Home />
              <News />
              <Videos />
              <WeAre />
              <Album />
              <Cosquin />
              <Cordura />
              <CircularConcert />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
    </>
  );
}

export default App;
