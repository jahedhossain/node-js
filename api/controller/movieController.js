const Movie = require('../model/movieModel')
//get All movie controller 
const AllMovieController = (req,res,next) =>{
    res.json({
        mag: 'Get all movie post'
    })
}
module.exports.AllMovieController = AllMovieController

//new post controller
const newPostController = (req,res,next) =>{

    const data ={
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        cetagory: req.body.cetagory,
        duration: req.body.duration,
    }
    
    const movie = new Movie(data)
        movie.save()
            .then(data => {
                console.log(date)
                res.json({
                    msg: 'add data',
                    movie: data
                })
            })
            .catch(error => {
                console.log(error)
                res.json({
                    mas: 'error data',

                })
            })

    console.log(movie)
/*     res.json({
        mag: 'post new single movie post'  
    }) */
}
module.exports.newPostController = newPostController

//Get single movie controller
 const singleMovieController =(req,res,next) =>{
    res.json({
        mag: 'Get single movie'
    })
}
module.exports.singleMovieController = singleMovieController

//patch movie Controller
const patchMovieController = (req,res,next) =>{
    res.json({
        mag: 'patch single movie post'
    })
}
module.exports.patchMovieController = patchMovieController

//delate movie Controller 
const delateMovieController = (req,res,next) =>{
    res.json({
        mag: 'delate single movie post'
    })
}
module.exports.delateMovieController = delateMovieController