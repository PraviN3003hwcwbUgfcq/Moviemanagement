const express = require('express');
const { addMovies, showModvies, showSpecificMovie, editMovie, deleteMovie } = require('../controllers/movieController');


const router = express.Router();

router.post('/add',addMovies);
router.get('/show',showModvies);
router.get('/show/:id',showSpecificMovie);
router.put('/edit/:id',editMovie);
router.delete('/delete/:id',deleteMovie);





module.exports = router