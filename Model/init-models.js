const sequelize = require("../utils/database");
const DataTypes = require("sequelize").DataTypes;
const _tbl_admin = require("./tbl_admin");
const _tbl_transaction = require("./tbl_transaction");
const _tbl_user = require("./tbl_user");
const _tbl_user_banking = require("./tbl_user_banking");
const _tbl_wallet = require("./tbl_wallet");

function initModels(sequelize) {
  const tbl_admin = _tbl_admin(sequelize, DataTypes);
  const tbl_transaction = _tbl_transaction(sequelize, DataTypes);
  const tbl_user = _tbl_user(sequelize, DataTypes);
  const tbl_user_banking = _tbl_user_banking(sequelize, DataTypes);
  const tbl_wallet = _tbl_wallet(sequelize, DataTypes);

  tbl_transaction.belongsTo(tbl_user, { as: "user", foreignKey: "user_id" });
  tbl_user.hasMany(tbl_transaction, { as: "tbl_transactions", foreignKey: "user_id" });
  tbl_transaction.belongsTo(tbl_user, { as: "transfered_user", foreignKey: "transfered_user_id" });
  tbl_user.hasMany(tbl_transaction, { as: "transfered_user_tbl_transactions", foreignKey: "transfered_user_id" });
  tbl_user_banking.belongsTo(tbl_user, { as: "user", foreignKey: "user_id" });
  tbl_user.hasMany(tbl_user_banking, { as: "tbl_user_bankings", foreignKey: "user_id" });
  tbl_wallet.belongsTo(tbl_user, { as: "user", foreignKey: "user_id" });
  tbl_user.hasOne(tbl_wallet, { as: "tbl_wallet", foreignKey: "user_id" });

  return {
    tbl_admin,
    tbl_transaction,
    tbl_user,
    tbl_user_banking,
    tbl_wallet,
  };
}
module.exports = initModels(sequelize);
module.exports.initModels = initModels(sequelize);
module.exports.default = initModels(sequelize);
