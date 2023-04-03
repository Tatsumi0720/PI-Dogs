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
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    weight:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    life_span:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },
    { timestamps: true });
};
