enum erros  {
    EMAIL_EXISTENTE = "E-mail ja cadastrado!",
    EMAIL_NAO_VALIDO = "Este e-mail não e valido! / ",
    SENHA_INCORRETA = "Senha incorreta!",
    SENHA_MENOR = "Campo senha deve conter pelo menos 6 caracteres!",
    NOME_EM_BRANCO = "Campo nome esta em branco!",
    EMAIL_EM_BRANCO = "Campo e-mail esta em branco!",
    SENHA_EM_BRANCO = "Campo senha esta em branco!",
    FALHA_SALVA_IMAGEM = "Falha em salvar imagem, salve em jpeg ou png!",
    VALIDA_TOKEM = "Usuario não autorizado!",
    TOKEM_INVALIDO = "usuario não esta logado!",
    USUARIO_NAO_PERMITIDO = "Usuario não permitido para login! ",
    NAO_PERMITIDO =" 'NÂO AUTORIZADO', Existe uma permirsão cadastrada como / "
}

class Mensege extends Error {

    constructor (msg: string){
        super(msg);
    }
}

export { Mensege, erros }

