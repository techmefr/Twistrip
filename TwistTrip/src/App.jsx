<<<<<<< HEAD
=======
import { Suspense, lazy } from 'react';
>>>>>>> ef9ca51aeeaa3349dee4806c2f4c6f99797c7fe7
import "./App.css";
import "./sipper.css";
import Homepage from "./components/Homepage";

// Lazy load the Choix component
const Choix = lazy(() => import('./components/Choix'));

function App() {

  return (
    <>
      <Homepage />
      <Homepage />
      <Suspense fallback={<div className="spinner-container"><div className="spinner"></div></div>}>
        <Choix />
      </Suspense>
    </>
  );
}

export default App;