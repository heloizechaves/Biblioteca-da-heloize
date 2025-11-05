import {criarUsuario, buscarUsuarioPorEmail} from "../models/userModel.js";

export async function registrarUsuario(req, res) {
    try {
        const {nome, email, senha} = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({erro: "Preencha todos os campos"});
        }

        const senhaForte = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{6,}$/;
        if(!senhaForte.test(senha)) {
            return res.status(400).json({erro: "A senha deve ter pelo menos 6 caracteres, uma letra maiúscula e uma caractere especial."});
        }
        const usuarioExistente = await buscarUsuarioPorEmail(email);
        if (usuarioExistente) {
            return res.status(201).json({erro: "Usuário já cadastrado"});
        }

        const novoUsuario = await criarUsuario(nome, email, senha);
        res.status(201).json({mensagem: "Usuário cadastrado com sucesso!", usuario: novoUsuario});
    
    } catch (error) {
     console.log(error);
     res.status(500).json({
      Erro: "Erro ao cadastrar usuário." 
});

}
}
