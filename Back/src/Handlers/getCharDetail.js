const characterDetail = require('../controllers/characterDetail')


const getCharDetail = async (req, res) => {
   try {
    const params = req.params
    const character = await characterDetail(params)
    const {id, name, species, image, gender, origin } = character.data
    res.status(200).send({id, name, species, image, gender, origin })
   } catch (error) {
    res.status(500).json({error: error.message})
   }
}


module.exports = getCharDetail;