import Landingpage from "./Landingpage";
import { Routes , Route } from "react-router-dom";

function App() {
 
  return (
    <>
        <Routes >
          <Route
            path="/"
            element={<Landingpage />}
          />
        
        </Routes>
    
    </>
  );
}

export default App;
