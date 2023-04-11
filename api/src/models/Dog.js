const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    height: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    weight: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    life_span:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    createDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },
    { timestamps: true });
};
