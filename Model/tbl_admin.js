const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_admin', {
    admin_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mobile_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "mobile_no"
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "email"
    },
    user_type: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_of_join: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    verification: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    aadhaar_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "aadhaar_no"
    },
    pan_no: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: "pan_no"
    },
    profile_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_id" },
        ]
      },
      {
        name: "mobile_no",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mobile_no" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "aadhaar_no",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aadhaar_no" },
        ]
      },
      {
        name: "pan_no",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pan_no" },
        ]
      },
    ]
  });
};
