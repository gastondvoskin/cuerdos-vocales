import { Home, Videos, News, WeAre, Album, Cosquin, Cordura, CircularConcert, Contact, Footer } from "./sections/index";
import NavLarge from "./navigation/NavLarge";
import NavSmall from "./navigation/NavSmall";
import { Routes, Route, useNavigate } from "react-router-dom";
import Xirgu from "./Xirgu";
import { useEffect } from "react";

function App() {
  // console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`); // laptop 1280, 585; monitor 1920, 945

  const RedirectToHome = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/");
    }, [navigate]);
    return null;
  }

  return (
    <>
      <Routes>
        <Route path="/xirgu" element={<Xirgu />}/>
        <Route path="/" element={
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
        } />
        <Route path="*" element={<RedirectToHome />}/>
      </Routes>
    </>
  );
};

export default App;
