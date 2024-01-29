import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FromClient from "./FormClient/FromClient";
import FromPartner from "./FormPartner/FromPartner";
import Tabel from "./Tabel/Tabel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tabel />} />
        <Route path="/partner" element={<FromPartner />} />
        <Route path="/client" element={<FromClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
