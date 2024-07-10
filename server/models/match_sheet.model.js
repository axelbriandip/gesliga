// recover db
const { db, DataTypes } = require('../utils/database.util');

// create model
const MatchSheet = db.define('matchSheet', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // don't has be null
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    competition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opponent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    players: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true //add createdAt and updatedAt
})

// export
module.exports = { MatchSheet };