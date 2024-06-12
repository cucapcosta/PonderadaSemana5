module.exports = {
  tableName: 'users',
  attributes: {
    nome: { type: 'string', required: true },
    username: { type: 'string', required: true },
    senha: { type: 'string', required: true },
    email: { type: 'string', required: true },
    cep: { type: 'string', required: true },
    cidade: { type: 'string', required: true },
  }
};
