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
    name_abb: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    name_large: {
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
    // shield: {
    //     type: DataTypes.BLOB,
    //     allowNull: true
    // },
    // shield_white: {
    //     type: DataTypes.BLOB,
    //     allowNull: true
    // },
    // shield_black: {
    //     type: DataTypes.BLOB,
    //     allowNull: true
    // },
    id_delegate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: true //add createdAt and updatedAt
})

// export
module.exports = { Club };