import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from 'react';
import TelaCadastro from "./componentes/Telas/TelaCadastro";

import storeUsuario from "./redux/storeUsuario";
import { Provider } from "react-redux";

export const ContextoUsuario = createContext();

function App() {

  const [usuario, setUsuario] = useState({
    "usuario": "",
    "logado": false
  });

  /*if (!usuario.logado) {
    return (
      <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
        <TelaLogin />
      </ContextoUsuario.Provider>
    );
  }
  else {
    
  }*/
  return (
    <div className="App">
      <Provider store={storeUsuario}>
        <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
          <BrowserRouter>
            { //A ordem das rotas é importante 
            }
            <Routes>
              <Route path="/Usuario" element={<TelaCadastro />} />
              <Route path="/" element={<TelaMenu />} />
              <Route path="*" element={<Tela404 />} />
            </Routes>
          </BrowserRouter>
        </ContextoUsuario.Provider>
      </Provider>
    </div >
  );
}

export default App;
