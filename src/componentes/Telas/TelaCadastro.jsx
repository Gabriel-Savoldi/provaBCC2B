import { Alert } from "react-bootstrap";
import FormCadProdutos from "./Formularios/FormCadUsuario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaUsuario";
import TabelaUsuario from "./Tabelas/TabelaUsuario";
//import { produtos } from "../../dados/mockProdutos";


export default function TelaCadastro(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    //const [produtos, setProdutos] = useState([]);
    const [UsuarioSelecionado , setUsuarioSelecionado] = useState({
        id:0,
        nickname: "",
        urlImagem: "",
        senha:"0",
    });

    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Usuario
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaUsuario setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                         /> :
                        <FormCadProdutos setExibirTabela={setExibirTabela}
                                         UsuarioSelecionado={UsuarioSelecionado}
                                         setUsuarioSelecionado={setUsuarioSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}

                                         />
                }
            </Pagina>
        </div>
    );

}