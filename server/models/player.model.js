// recover db
const { db, DataTypes } = require('../utils/database.util');

// create model
const Player = db.define('player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // don't has be null
    },
    firstName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: false
    },
    license: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    photoDniFront: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    photoDniReverse: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    photoMedicalCertificate: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    clubId: {
        type: DataTypes.INTEGER,
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
module.exports = { Player };