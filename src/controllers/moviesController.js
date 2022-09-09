
const { Movie } = require('../database/models');
const { Op } = require("sequelize");


const moviesController = {
    list: async (req, res) => {
        try {
            const movieList = await Movie.findAll({
                include: ['people']
            })
            return res.json({
                "success": true,
                "data": {
                    movieList
                }
            })
        } catch (error) {
            return res.status(500).json("Something went wrong...")
        }

    },
    find: async (req, res) => {
        try {
            const movie = await Movie.findOne({ where: { title: { [Op.like]: `%${req.params.name}%` } }, include: ['people'] })
            if (movie) {
                return res.json({
                    "success": true,
                    "data": {
                        movie
                    }
                })
            } else {
                return res.status(400).json("No movies found for that name, try another!")
            }
        } catch (error) {
            return res.status(500).json("Something went wrong, try with another name")
        }
    }
}

module.exports = moviesController;


