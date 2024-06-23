// import models
const { User } = require('./user.model');
const { Club } = require('./club.model');

// relations
const initModels = () => {
    // one to one
    User.hasOne(Club);
	Club.belongsTo(User);
};

// export
module.exports = { initModels };