module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    return User
}