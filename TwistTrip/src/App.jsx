
import { Suspense, lazy } from 'react';
import "./App.css";
import "./sipper.css";
import Homepage from "./components/Homepage";

// Lazy load the Choix component
const Choix = lazy(() => import('./components/Choix'));

function App() {

  return (
    <>
      <Homepage />
      <Suspense fallback={<div className="spinner-container"><div className="spinner"></div></div>}>
        <Choix />
      </Suspense>
    </>
  );
}

export default App;