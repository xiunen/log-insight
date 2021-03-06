'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Logs.init({
    fileid: DataTypes.INTEGER,
    line: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    remark: DataTypes.STRING,
    mark: DataTypes.INTEGER,
    omit: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Logs',
  });
  return Logs;
};