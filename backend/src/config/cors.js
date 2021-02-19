module.exports = (req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Controle-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}