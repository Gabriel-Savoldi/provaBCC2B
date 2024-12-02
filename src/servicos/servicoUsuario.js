const urlBase = 'https://backend-bcc-2-b.vercel.app/usuario';

export async function gravarUsuario(usuario){
    const resposta = await fetch(urlBase,{
        'method':"POST",
        'headers': { 
            'Content-Type':"application/json"
        },
        'body': JSON.stringify(usuario)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function alterarUsuario(usuario){
    const resposta = await fetch(urlBase,{
        'method':"PUT",
        'headers': { 
            'Content-Type':"application/json"
        },
        'body': JSON.stringify(usuario)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function excluirUsuario(usuario){
    const resposta = await fetch(urlBase,{
        'method':"DELETE",
        'headers': { 
            'Content-Type':"application/json"
        },
        'body': JSON.stringify(usuario)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function consultarUsuario(termo) {
    const resposta = await fetch(urlBase + "/" + termo,{
        'method':"GET",
        'headers': { 
            'Content-Type':"application/json"
        }
    });
    const resultado = await resposta.json();
    return resultado;
}