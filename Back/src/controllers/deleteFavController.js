const favs = require('../utils/favs')


const postFavController = async (id) => {
return favs.filter(char => char.id != id)
}


module.exports = postFavController;