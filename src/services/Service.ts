import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-tigh.onrender.com'
})

// Função para Cadastrar Usuarios

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}


// Função para Autenticar Usuário
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}