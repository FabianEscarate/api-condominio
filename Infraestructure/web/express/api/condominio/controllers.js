const ModelCondominio = require("./model.js");

const getCondominios = async (req, res) => {
  let data = await ModelCondominio.find({})
    .exec()
    .catch((err) => ({ err }));

  if (data.err) res.status(500).send(data.err.message);

  res.status(200).json(data);
};

const postCondominio = async (req, res) => {
  let condominio = new ModelCondominio(req.body);
  let resultSave = await condominio.save().catch((err) => {
    return { err };
  });

  if (resultSave.err) res.status(500).send(resultSave.err.message);

  res.status(200).json(condominio);
};

const getCondominioId = async (req, res) => {
  let id = req.params.id;
  let condominio = await ModelCondominio.findById(id)
    .exec()
    .catch((err) => ({ err }));

  if (!condominio) res.status(500).send("Elemento inexistente");
  if (condominio?.err) res.status(500).send(condominio.err.message);

  res.status(200).json(condominio);
};

const putCondominioId = async (req, res) => {
  let body = req.body;
  if (body?._id) delete body._id;
  let id = req.params.id;
  let condominio = await ModelCondominio.findByIdAndUpdate(id, body).catch(
    (err) => {
      return { err };
    }
  );

  if (!condominio) res.status(500).send("Elemento inexistente");
  if (condominio.err) res.status(500).send(condominio.err.message);

  res.status(200).json(condominio);
};

const deleteCondominioId = async (req, res) => {
  let id = req.params.id;
  let condominio = await ModelCondominio.findByIdAndDelete(id).exec();

  if (!condominio) res.status(500).send("Elemento inexistente");
  if (condominio.err) res.status(500).send(condominio.err.message);

  res.status(200).json(condominio);
};

module.exports = {
  getCondominios,
  postCondominio,
  getCondominioId,
  putCondominioId,
  deleteCondominioId,
};
