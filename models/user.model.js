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
    role: {
        type: DataTypes.ENUM('admin', 'delegate', 'discipline', 'guest'),
        allowNull: false,
        defaultValue: 'guest'
    },
    first_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    second_name: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    first_lastname: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    second_lastname: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(16),
        allowNull: false
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
    // photo: {
    //     type: DataTypes.BLOB,
    //     allowNull: true
    // },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: true //add createdAt and updatedAt
})

// export
module.exports = { User };