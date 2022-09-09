
const { Person } = require('../database/models');
const { Op } = require("sequelize");

const peopleController = {
    list: async (req, res) => {
        try {
            const people = await Person.findAll({
                include: ['movies']
            })
            return res.json({
                "success": true,
                "data": {
                    people
                }
            })
        } catch (error) {
            return res.status(500).json("Something went wrong...")
        }

    },
    asActor: async (req, res) => {
        try {
            const moviesAsActor = await Person.findAll({
                where: {
                    name: { [Op.like]: `%${req.params.name}%` },
                    '$movies.personMovie.actor$': 1
                },
                include: ['movies']
            })
            if (moviesAsActor.length) {
                return res.json({
                    "success": true,
                    "data": {
                        moviesAsActor
                    }
                })
            } else {
                return res.status(400).json("No actor found for that name, try another!")
            }
        } catch (error) {
            return res.status(500).json("Something went wrong, try with another name")
        }

    },
    asDirector: async (req, res) => {
        try {
            const moviesDirector = await Person.findAll({
                where: {
                    name: { [Op.like]: `%${req.params.name}%` },
                    '$movies.personMovie.director$': 1
                },
                include: ['movies']
            })
            if (moviesDirector.length) {
                return res.json({
                    "success": true,
                    "data": {
                        moviesDirector
                    }
                })
            } else {
                return res.status(400).json("No director found for that name, try another!")
            }
        } catch (error) {
            return res.status(500).json("Something went wrong, try with another name")
        }

    },
    asProducer: async (req, res) => {
        try {
            const moviesProducer = await Person.findAll({
                where: {
                    name: { [Op.like]: `%${req.params.name}%` },
                    '$movies.personMovie.producer$': 1
                },
                include: ['movies']
            })
            if (moviesProducer.length) {
                return res.json({
                    "success": true,
                    "data": {
                        moviesProducer
                    }
                })
            } else {
                return res.status(400).json("No producer found for that name, try another!")
            }
        } catch (error) {
            return res.status(500).json("Something went wrong, try with another name")
        }


    }
}

module.exports = peopleController;