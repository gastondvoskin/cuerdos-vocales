import { Home, Videos, News, WeAre, Album, Cosquin, Cordura, CircularConcert, Contact, Footer } from "./sections/index";
import NavLarge from "./navigation/NavLarge";
import NavSmall from "./navigation/NavSmall";

function App() {
  // console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`); // laptop 1280, 585; monitor 1920, 945

  return (
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
  );
};

export default App;
