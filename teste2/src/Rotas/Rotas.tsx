import { Route, Routes } from "react-router-dom";
import HOME from "../home/Home";
import MASCULINOCURTO from "../aba/abaMasculino/abaMcurto";
import MASCULINOLONGO from "../aba/abaMasculino/abaMlongo";
import MASCULINOFANTASIA from "../aba/abaMasculino/abaMfantasia";
import FEMININOCURTO from "../aba/abaFeminino/abaFcurto";
import FEMININOFANTASIA from "../aba/abaFeminino/abaFfantasia";
import FEMININOLONGO from "../aba/abaFeminino/abaFlongo";
import BEBECURTO from "../aba/abaBebe/abaBcurto";
import BEBEFANTASIA from "../aba/abaBebe/abaBfantasia";
import BEBELONGO from "../aba/abaBebe/abaBlongo";
import P1111 from "../Detro_Aba_Pijama/P1111";

function ROTAS() {
  return (
    <div>
        {/*ABAS*/}
      <div>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/MasculinoCurto" element={<MASCULINOCURTO />} />
        <Route path="/MasculinoLongo" element={<MASCULINOLONGO />} />
        <Route path="/MasculinoFantasia" element={<MASCULINOFANTASIA />} />
        <Route path="/FemininoCurto" element={<FEMININOCURTO />} />
        <Route path="/FemininoFantasia" element={<FEMININOFANTASIA />} />
        <Route path="/FemininoLongo" element={<FEMININOLONGO />} />
        <Route path="/BebeCurto" element={<BEBECURTO />} />
        <Route path="/BebeFantasia" element={<BEBEFANTASIA />} />
        <Route path="/BebeLongo" element={<BEBELONGO />} />
      </Routes>
      </div>
      {/*Dentro das opçao do pijamas*/}
      <div>
      <Routes>
        <Route path ="/P1111" element={<P1111/>}/>
      </Routes>
      </div>
    </div>
  );
}
export default ROTAS;
