import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { consultarUsuario, alterarUsuario, excluirUsuario } from "../servicos/servicoUsuario";

import ESTADO from "./estados";

export const buscarUsuario = createAsyncThunk('buscarUsuario', async (termo)=>{
    //lista de produtos
    if(!(termo))  /// Se o termo não for enviado atribui a termo um valor vazio padrão (acredito que o backend já faça isso).
    {
        termo = "";
    }
    
    //se for um array/lista a consulta funcionou
    try {
        const resultado = await consultarUsuario(termo);
        if (Array.isArray(resultado)){
            return {
                "status":true,
                "mensagem":"Usuarios recuperados com sucesso",
                "listaDeUsuarios":resultado
            }
        }
        else
        {
            return {
                "status":false,
                "mensagem":"Erro ao recuperar os Usuarios do backend.",
                "listaDeUsuarios":[]
            }
        }
    }
    catch(erro){
        return {
            "status":false,
            "mensagem":"Erro: " + erro.message,
            "listaDeUsuarios":[]
        }
    }
});

export const apagarUsuario = createAsyncThunk('apagarUsuario', async (usuario)=>{
//dar previsibilidade ao conteúdo do payload
    //lista de produtos
    //console.log(produto);
    
    //se for um array/lista a consulta funcionou
    //console.log(resultado);
    try {
        const resultado = await excluirUsuario(usuario);
            return {
                "status":resultado.status,
                "mensagem":resultado.mensagem,
            }
    }
    catch(erro){
        return {
            "status":false,
            "mensagem":"Erro: " + erro.message,
        }
    } 
});

const UsuarioReducer = createSlice({
    name:'Usuario',
    initialState:{
        estado: ESTADO.OCIOSO,
        mensagem:"",
        listaDeUsuarios:[]
    },
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(buscarUsuario.pending, (state, action) =>{
            state.estado=ESTADO.PENDENTE
            state.mensagem="Processando requisição (buscando usuarios)"
        })
        .addCase(buscarUsuario.fulfilled, (state, action) =>{
          if (action.payload.status){
            state.estado=ESTADO.OCIOSO;
            state.mensagem=action.payload.mensagem;
            state.listaDeUsuarios=action.payload.listaDeUsuarios;
          } 
          else{
            state.estado=ESTADO.ERRO;
            state.mensagem = action.payload.mensagem;                   // não garanto que vai existir action.payload pois deu erro testar !!!!!
            state.listaDeUsuarios=action.payload.listaDeUsuarios;
          } 
        })
        .addCase(buscarUsuario.rejected, (state, action) =>{
            state.estado=ESTADO.ERRO;
            state.mensagem = "Falha ao buscar Usuarios";
            state.listaDeUsuarios=[];
        })
        .addCase(apagarUsuario.pending, (state,action) =>{
            state.estado=ESTADO.PENDENTE;
            state.mensagem=action.payload.mensagem;
        })
        .addCase(apagarUsuario.fulfilled,(state,action) =>{
            state.estado=ESTADO.OCIOSO;
            state.mensagem=action.payload.mensagem;
            //altera a lista de produtos?
        })
        .addCase(apagarUsuario.rejected,(state,action)=>{
            state.estado=ESTADO.ERRO;
            state.mensagem=""//action.payload.mensagem;
        })
    }
});

export default UsuarioReducer.reducer;