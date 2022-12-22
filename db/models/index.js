const { User, UserSchema } = require('./user.model')
// TODO: Include the rest of the models here

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
}

module.exports = setupModels
