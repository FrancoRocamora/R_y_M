const {Router} = require('express')
const getCharById = require('../Handlers/getCharById')
const getCharDetail = require('../Handlers/getCharDetail')
const postFav = require('../Handlers/postFav')
const getFav = require('../Handlers/getFav')
const deleteFav = require('../Handlers/deleteFav')
const router = Router()


router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharDetail)
router.post('/fav', postFav )
router.get('/fav', getFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;