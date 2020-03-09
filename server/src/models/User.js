module.exports = (sequelize, DataTypes) => 
    sequelize.define('User',{ 
        email: {
            type: DateTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
})