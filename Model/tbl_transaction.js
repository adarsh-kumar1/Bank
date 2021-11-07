const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_transaction', {
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'tbl_user',
        key: 'user_id'
      }
    },
    transaction_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    transfer_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    transfer_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    transfer_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    transfer_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    transaction_from: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    transaction_to: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    transfered_user_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: 'tbl_user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_transaction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
        ]
      },
      {
        name: "fk3",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk4",
        using: "BTREE",
        fields: [
          { name: "transfered_user_id" },
        ]
      },
    ]
  });
};
