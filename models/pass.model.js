// recover db
const { db, DataTypes } = require('../utils/database.util');

// create model
const Pass = db.define('pass', {
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
    clubId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    since: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    until: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    photoContract: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    loan: {
        type: DataTypes.INTEGER,
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
module.exports = { Pass };