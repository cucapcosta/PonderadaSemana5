module.exports = {


  friendlyName: 'Nameformating',


  description: 'Nameformating something.',


  inputs: {
    nome: {
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    validRegex = /^[a-zA-Z ]+$/;
    if (validRegex.test(inputs.nome)) {
      return inputs.nome;
    } else {
      throw new Error('Nome com caracteres inválidos');
    }
  }


};

