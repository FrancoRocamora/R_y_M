const deleteFavController = require('../controllers/deleteFavController')


const deleteFavs = async (req, res) => {
   try {
    const {id} = req.params
    const deleted = await deleteFavController(id)
    res.status(200).json(deleted)
   } catch (error) {
    res.status(500).json({error: error.message})
   }
}


module.exports = deleteFavs;