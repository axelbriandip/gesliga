// recover db
const { DataTypes, db } = require('../utils/database.util');

// create model
const Club = db.define('club', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // don't has be null
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    fullName: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    abbreviationName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    foundation: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    president: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shield: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    shieldWhite: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    shieldBlack: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    delegateId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    players: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
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
module.exports = { Club };