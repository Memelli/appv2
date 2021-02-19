const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/appv2', {useNewUrlParser: true})
const Error = mongoose.Error.messages

Error.general.required = "O atributo '{PATH}' é obrigatorio"
Error.Number.min = "O '{VALUE}' informado é menor que o limite minímo de '{MIN}'"
Error.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'"
Error.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'"