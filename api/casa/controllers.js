const ModelCasa = require('./model.js')


const getCasas = async (req, res) => {
    let data = await ModelCasa.find({})
    res.json(data)
}

const postCasa = async (req, res) => {

    let casa = new ModelCasa(req.body)
    let resultSave = await casa.save().catch((err) => {
        return {err}
    })

    if (resultSave.err) res.status(500).send(resultSave.err.message)

    res.status(200).json(casa)
}

const getCasaId = async (req, res) => {
    let id = req.params.id
    let casa = await ModelCasa.findById(id).exec().catch((err) =>{
        return {err}
    })

    if (!casa) res.status(500).send('Elemento inexistente')
    if (casa?.err) res.status(500).send(casa.err.message)

    res.status(200).json(casa)
}

const putCasaId = async (req, res) => {
    let body = req.body
    if(body?._id) delete body._id
    let id = req.params.id
    let casa = await ModelCasa.findByIdAndUpdate(id, body).catch((err) => {
        return {err}
    })

    if(!casa) res.status(500).send('Elemento inexistente')
    if (casa.err) res.status(500).send(casa.err.message)

    res.status(200).json(casa)
}

const deleteCasaId = async (req, res) => {
    let id = req.params.id
    let casa = await ModelCasa.findByIdAndDelete(id).exec()

    if(!casa) res.status(500).send('Elemento inexistente')
    if(casa.err) res.status(500).send(casa.err.message)

    res.status(200).json(casa)
}

module.exports = {
    getCasas,
    postCasa,
    getCasaId,
    putCasaId,
    deleteCasaId
}