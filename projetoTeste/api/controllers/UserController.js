module.exports = {
  create: async function (req, res) {
    try {
      var newUser = await User.create({
        nome: await sails.helpers.nameformating(req.body.nome),
        username: await sails.helpers.usernameformating(req.body.username),
        senha: req.body.senha,
        email: await sails.helpers.emailformating(req.body.email),
      }).fetch();
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send(error.message);
    }
  },
  delete: async function (req, res) {
    try{
      let deleted = await User.destroyOne({id: req.params.id});
      if(deleted){
        return res.status(200).send('Usuário deletado com sucesso');
      }
    }catch(error){
      return res.status(500).send(error.message);
    }
  },
  getById: async function (req, res) {
    try {
      var user = await User.findOne({ id: req.params.id });
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).send('Usuário não encontrado');
    } catch (error) {
      return res.serverError(error);
    }
  },
};
