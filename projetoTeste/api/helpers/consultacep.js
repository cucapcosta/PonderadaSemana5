const axios = require('axios');
module.exports = {


  friendlyName: 'Consulta cep',


  description: '',


  inputs: {
    cep: {
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
    try {
      console.log(inputs.cep);
      const response = await axios.get(`https://viacep.com.br/ws/${inputs.cep}/json/`);
      const data = await response.json();
      console.log(data);
      return data.localidade;
    } catch (err) {
      throw new Error(err);
    }
  }

};

