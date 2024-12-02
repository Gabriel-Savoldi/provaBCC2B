import { configureStore } from "@reduxjs/toolkit";
import UsuarioReducer from "./UsuarioReducer";

const storeUsuario = configureStore({
    reducer:{
        'usuario':UsuarioReducer
    }
});

export default storeUsuario;