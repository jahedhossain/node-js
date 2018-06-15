const router = require('express').Router()
const movieController = require('../controller/movieController')

//Get all movie post
router.get('/',movieController.AllMovieController)
//post new single movie post
router.post('/',movieController.newPostController)
//Get single movie
router.get('/:id',movieController.singleMovieController)
//patch single movie post
router.patch('/:id',movieController.patchMovieController)
//delate single movie post
router.delete('/:id',movieController.delateMovieController)
module.exports = router