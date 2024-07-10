// recover db
const { db, DataTypes } = require('../utils/database.util');

// create model
const League = db.define('league', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // don't has be null
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shield: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    shieldWhite: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    shieldBlack: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    clubs: {
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
module.exports = { League };