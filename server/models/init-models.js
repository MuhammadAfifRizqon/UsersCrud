import { Sequelize } from "sequelize";
import config from "../../config/config";

const sequelize = new Sequelize (
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect : 'postgres',
    pool : {
      max : 5,
      min : 0,
      acquire : 30000,
      idle : 1000
    }
  }
)


var DataTypes = require("sequelize").DataTypes;
var _users = require("./users");

function initModels(sequelize) {
  var users = _users(sequelize, DataTypes);


  return {
    users,
  };
}

const models = initModels(sequelize);
export default models
export {sequelize}