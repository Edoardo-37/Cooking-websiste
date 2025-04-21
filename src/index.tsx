import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from "react-router"

// sheets
import { App } from './App';
import { Ricette } from './pages/Ricette/Ricette';
import ZuppaDiPiselli from './pages/Ricette/Ricetta1/ZuppaDiPiselli';
import PastaAlPomodoro from './pages/Ricette/Ricetta2/PastaAlPomodoro';
import RisoZafferazno from './pages/Ricette/Ricetta3/RisoZafferazno';
import PastaFunghiPanna from './pages/Ricette/Ricetta4/PastaFunghiPanna';
import BocconciniPolloLimone from './pages/Ricette/Ricetta5/BocconciniPolloLimone';
import InvoltiniDiZucchine from './pages/Ricette/Ricetta6/InvoltiniDiZucchine';
import { recipePageContent } from './Components/common/recipePageContent/recipePageContent';
import { recipeCardContent } from './Components/Recipe-Card/recipeCardContent';
import { Newsletter } from './pages/Newsletter/Newsletter';



let container = document.getElementById("app")!;
let root = createRoot(container)
root.render(

  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ricette" element={<Ricette />} />
          <Route path={recipeCardContent.zuppaDiPiselli.route} element={<ZuppaDiPiselli recipePageContent={recipePageContent.zuppaPiselli} />} /> 
          <Route path={recipeCardContent.pastaAlPomodoro.route} element={<PastaAlPomodoro recipePageContent={recipePageContent.pastaAlPomodoro} />} /> 
          <Route path={recipeCardContent.risoZafferano.route} element={<RisoZafferazno recipePageContent={recipePageContent.risoZafferano}  />} /> 
          <Route path={recipeCardContent.pastaFunghiPanna.route} element={<PastaFunghiPanna recipePageContent={recipePageContent.pastaFunghiPanna}  />} /> 
          <Route path={recipeCardContent.bocconciniPolloAlLimone.route} element={<BocconciniPolloLimone recipePageContent={recipePageContent.bocconciniPolloAlLimone}  />} />
          <Route path={recipeCardContent.involtiniDiZucchine.route} element={<InvoltiniDiZucchine recipePageContent={recipePageContent.involtiniDiZucchine}  />} />
          <Route path="/form-iscrizione" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
