module.exports = (sequelize, dataTypes) => {
    let alias = 'Person';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        age: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        deletedAt: false
    }
    const Person = sequelize.define(alias, cols, config);

    Person.associate = function (models) {
        Person.belongsToMany(models.Movie, {
            as: "movies",
            through: models.PersonMovie,
            foreignKey: 'person_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }

    return Person
};