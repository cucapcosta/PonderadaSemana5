module.exports = {


  friendlyName: 'Emailformating',


  description: 'Emailformating something.',


  inputs: {
    email:{
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
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(validRegex.test(inputs.email)){
      return inputs.email.toLowerCase();
    }else{
      throw new Error('Email Inválido');
    }
  }


};

