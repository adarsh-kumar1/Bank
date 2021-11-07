const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user_banking', {
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'tbl_user',
        key: 'user_id'
      }
    },
    bank_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_branch: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    account_no: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    ifsc: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    rtgs: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    account_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    account_holder_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_user_banking',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_no" },
        ]
      },
      {
        name: "fk_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
