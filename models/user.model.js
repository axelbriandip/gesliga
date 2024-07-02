// recover db
const { db, DataTypes } = require('../utils/database.util');

// create model
const User = db.define('user', {
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
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    photo: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'delegate', 'discipline', 'guest'),
        allowNull: false,
        defaultValue: 'guest'
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true //add createdAt and updatedAt
})

// export
module.exports = { User };