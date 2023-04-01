const getFavsController = require('../controllers/getFavsController')


const getFavs = async (req, res) => {
   try {
    const post = await getFavsController()
    res.status(200).json(post)
   } catch (error) {
    res.status(500).json({error: error.message})
   }
}


module.exports = getFavs;