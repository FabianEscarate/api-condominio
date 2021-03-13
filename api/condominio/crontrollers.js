const ModelCondominio = require('./model.js')


const getCondominios = async (req, res) => {
    let data = await ModelCondominio.find({})
    res.json(data)
}

const postCondominio = async (req, res) => {
    console.log(req.body)
    let condominio = new ModelCondominio(req.body)
    let resultSave = await condominio.save()
    res.json(req.body)
}

const getCondominioId = (req, res) => {
    res.send(req.baseUrl)
}

const putCondominioId = (req, res) => {
    res.send(req.baseUrl)
}

const deleteCondominioId = (req, res) => {
    res.send(req.baseUrl)
}

module.exports = {
    getCondominios,
    postCondominio,
    getCondominioId,
    putCondominioId,
    deleteCondominioId
}