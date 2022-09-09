module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        year: {
            type: dataTypes.DATE,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        deletedAt: false
    }
    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function (models) {
        Movie.belongsToMany(models.Person, {
            as: "people",
            through: models.PersonMovie,
            foreignKey: 'movie_id',
            otherKey: 'person_id',
            timestamps: false
        })
    }

    return Movie
};