const { user_types } = require(".");
const job_post = require("./job_post");

module.exports = (sequelize, DataTypes) =>{

  const Messages = sequelize.define('messages', {
    // Model attributes are defined here
    cors: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })
  return Messages
  ;}