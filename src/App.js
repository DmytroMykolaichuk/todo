import { Routes,Route } from "react-router-dom";

import { HomePage } from "./page/HomePage";
import { AboutPage } from "./page/AboutPage";
import { NotFound } from "./page/NotFound";

import { Company } from "./components/Company/Company";
import { Team } from "./components/Team/Team";

function App() {
  return (
<>

<Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about" element={<AboutPage />} >
          <Route path='company' element={<Company/>}/>
          <Route path='team' element={<Team/>}/>
        </Route>
        
        <Route path="*" element={<NotFound />} />
</Routes>

</>

  );
}

export default App;
