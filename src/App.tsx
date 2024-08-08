import { Home, Videos, News, WeAre, Album, Cosquin, Cordura, CircularConcert, Contact, Footer } from "./sections/index";
import NavSmall from "./navigation/NavSmall";

function App() {
  return (
    <>
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
