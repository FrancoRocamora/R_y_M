const postFavController = require('../controllers/postFavController')


const postFav = async (req, res) => {
   try {
    const post = await postFavController(req)
    res.status(200).send({success: 'Added successfully',
    post: post})
   } catch (error) {
    res.status(500).json({error: error.message})
   }
}


module.exports = postFav;