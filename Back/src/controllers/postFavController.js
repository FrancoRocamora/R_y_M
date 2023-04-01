const favs = require('../utils/favs')


const postFavController = async (req) => {
return favs.push(req.body)
}


module.exports = postFavController;