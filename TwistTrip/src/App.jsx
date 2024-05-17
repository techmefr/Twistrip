// import { Suspense, lazy } from 'react';
import "./App.css";
import "./sipper.css";
import Homepage from "./components/Homepage";
import Choix from "./components/Choix";
import Payement from "./components/Payement";
import VisaCard from "./components/VisaCard";
import Roulette from "./components/Roulette";
import Confirmation from "./components/Confirmation";

// Lazy load the Choix component
// const Choix = lazy(() => import('./components/Choix'));

function App() {
  return (
    <>
      <Homepage />
      <Payement />
      <VisaCard />
      {/* <Suspense fallback={<div className="spinner-container"><div className="spinner"></div></div>}> */}
      <Choix />
      {/*< </Suspense> */}
      <Roulette />
      <Confirmation />
    </>
  );
}

export default App;
