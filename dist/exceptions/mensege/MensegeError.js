"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erros = exports.Mensege = void 0;
var erros;
(function (erros) {
    erros["EMAIL_EXISTENTE"] = "E-mail ja cadastrado!";
    erros["EMAIL_NAO_VALIDO"] = "Este e-mail n\u00E3o e valido! / ";
    erros["SENHA_INCORRETA"] = "Senha incorreta!";
    erros["SENHA_MENOR"] = "Campo senha deve conter pelo menos 6 caracteres!";
    erros["NOME_EM_BRANCO"] = "Campo nome esta em branco!";
    erros["EMAIL_EM_BRANCO"] = "Campo e-mail esta em branco!";
    erros["SENHA_EM_BRANCO"] = "Campo senha esta em branco!";
    erros["FALHA_SALVA_IMAGEM"] = "Falha em salvar imagem, salve em jpeg ou png!";
    erros["VALIDA_TOKEM"] = "Usuario n\u00E3o autorizado!";
    erros["TOKEM_INVALIDO"] = "usuario n\u00E3o esta logado!";
    erros["USUARIO_NAO_PERMITIDO"] = "Usuario n\u00E3o permitido para login! ";
})(erros || (erros = {}));
exports.erros = erros;
class Mensege extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.Mensege = Mensege;
//# sourceMappingURL=MensegeError.js.map