module.exports = (sequelize, dataTypes) => {
    let alias = 'PersonMovie';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        person_id: {
            type: dataTypes.BIGINT(10),
        },
        movie_id: {
            type: dataTypes.BIGINT(10),
        },
        actor: {
            type: dataTypes.INTEGER,
        },
        director: {
            type: dataTypes.INTEGER,
        },
        producer: {
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        timestamps: false,
        deletedAt: false,
        tableName: 'person_movie'
    }
    const PersonMovie = sequelize.define(alias, cols, config);
    return PersonMovie
};