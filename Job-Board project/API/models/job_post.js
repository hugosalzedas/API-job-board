const { user_types, companies } = require(".");

module.exports = (sequelize, DataTypes) =>{

const Job = sequelize.define('job', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
 location_job: {
   type: DataTypes.STRING,
   allowNull: false 
  },
  isavailable: {
    type : DataTypes.BOOLEAN,
    allowNull:false
  }
  
  // Other model options go here
})
return Job;
;}

// `sequelize.define` also returns the model




  //class job_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //static associate(models) {
      // define association here
   // }
 // };
 // job_post.init({
  //  Name: DataTypes.STRING,
   // description: DataTypes.STRING,
   // location: DataTypes.STRING,
   // isavailable: DataTypes.BOOLEAN
  //}, {
  //  sequelize,
   // modelName: 'job_post',
 // });
 // return job_post;
//};