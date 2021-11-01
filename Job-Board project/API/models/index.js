const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.jobs = require("./job_post.js")(sequelize, Sequelize);
db.user_types = require("./user.js")(sequelize, Sequelize);
db.companies = require("./companies.js")(sequelize, Sequelize);
db.messages = require("./messages.js")(sequelize, Sequelize);
db.locations = require("./locations.js")(sequelize, Sequelize);
db.activities = require("./job_post_activity.js")(sequelize, Sequelize);


db.jobs.belongsTo(db.user_types);
db.jobs.belongsTo(db.companies);

db.messages.belongsTo(db.user_types);
db.messages.belongsTo(db.jobs);

db.user_types.belongsTo(db.locations);
db.jobs.belongsTo(db.locations, {foreignKey: 'locationsid2'});

module.exports = db;
