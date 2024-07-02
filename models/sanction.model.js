// recover db
const { db, DataTypes } = require('../utils/database.util');

// create model
const Sanction = db.define('sanction', {
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
    competition: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numMatches: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
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
module.exports = { Sanction };