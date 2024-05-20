module.exports = {


  friendlyName: 'Usernameformating',


  description: 'Usernameformating something.',


  inputs: {
    username:{
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
    return inputs.username.toLowerCase().trim();
  }


};

