// import { Suspense, lazy } from 'react';
import { useState } from 'react';
import "./App.css";
import "./sipper.css";
import Homepage from "./components/Homepage";
import Choix from "./components/Choix";
import Payement from "./components/Payement";
// import VisaCard from "./components/VisaCard";
import Roulette from "./components/Roulette";
import Confirmation from "./components/Confirmation";

// Lazy load the Choix component
// const Choix = lazy(() => import('./components/Choix'));

function App() {
  const [currentComponent, setCurrentComponent] = useState('Homepage');

  const components = ['Homepage', 'Payement', 'VisaCard', 'Choix', 'Roulette', 'Confirmation'];

  const nextComponent = () => {
    const currentIndex = components.indexOf(currentComponent);
    const nextIndex = (currentIndex + 1) % components.length;
    setCurrentComponent(components[nextIndex]);
    document.getElementById(components[nextIndex]).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section
        id='Homepage'
        style={{ display: currentComponent === "Homepage" ? "block" : "none" }}
      >
        <Homepage />
      </section>
      <section
        id='Payement'
        style={{ display: currentComponent === "Payement" ? "block" : "none" }}
      >
        <Payement />
      </section>
      <section
        id='VisaCard'
        style={{ display: currentComponent === "VisaCard" ? "block" : "none" }}
      >
        <VisaCard />
      </section>
      <section
        id='Choix'
        style={{ display: currentComponent === "Choix" ? "block" : "none" }}
      >
        <Choix />
      </section>
      <section
        id='Roulette'
        style={{ display: currentComponent === "Roulette" ? "block" : "none" }}
      >
        <Roulette />
      </section>
      <section
        id='Confirmation'
        style={{
          display: currentComponent === "Confirmation" ? "block" : "none",
        }}
      >
        <Confirmation />
      </section>
      <div
        className='button-container'
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <button className="button-next" onClick={nextComponent}>Suivant</button>
      </div>
    </>
  );
}

export default App;