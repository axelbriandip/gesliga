// import models
const { User } = require('./user.model');
const { Club } = require('./club.model');
const { League } = require('./league.model');
const { Loan } = require('./loan.model');
const { MatchSheet } = require('./match_sheet.model');
const { Pass } = require('./pass.model');
const { Player } = require('./player.model');
const { Sanction } = require('./sanction.model');
const { Transfer } = require('./transfer.model');

// relations
const initModels = () => {
    // // one to one
    User.hasOne(Club, { foreignKey: 'userId', as: 'delegate' });
    Club.belongsTo(User);

    // // one to one
    Player.hasOne(Pass, { foreignKey: 'playerId' });
    Pass.belongsTo(Player);
    
    // // one to one
    Pass.hasOne(Loan, { foreignKey: 'passId' });
    Loan.belongsTo(Pass, { foreignKey: 'loanId' });

    // // one to one
    User.hasOne(League, { foreignKey: 'userId', as: 'admin' });
    League.belongsTo(User);

    // one to many
    Club.hasMany(Player, { foreignKey: 'clubId' });
    Player.belongsTo(Club);

    // one to many
    Player.hasMany(Sanction, { foreignKey: 'playerId' });
    Sanction.belongsTo(Player);

    // one to many
    Club.hasMany(MatchSheet, { foreignKey: 'clubId' });
    MatchSheet.belongsTo(Club);

    // one to many
    Player.hasMany(Transfer, { foreignKey: 'playerId' });
    Transfer.belongsTo(Player);
};

// export
module.exports = { initModels };