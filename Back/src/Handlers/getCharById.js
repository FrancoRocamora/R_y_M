const getCharacters = require('../controllers/getCharacters')


const getCharById = async (req, res) => {
   try {
    const params = req.params
    const character = await getCharacters(params)
    const {id, name, species, image, gender } = character.data
    res.status(200).send({id, name, species, image, gender })
   } catch (error) {
    res.status(500).json({error: error.message})
   }
}


module.exports = getCharById;