// recover db
const { db, DataTypes } = require('../utils/database.util');

// create model
const Loan = db.define('loan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // don't has be null
    },
    passId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    temporaryClubId: {
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
    conditions: {
        type: DataTypes.STRING,
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
module.exports = { Loan };