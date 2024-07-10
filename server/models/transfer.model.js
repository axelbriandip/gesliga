// recover db
const { db, DataTypes } = require('../utils/database.util');

// create model
const Transfer = db.define('transfer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // don't has be null
    },
    playerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fromClubId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    destinationClubId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    leagueResponse: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true //add createdAt and updatedAt
})

// export
module.exports = { Transfer };