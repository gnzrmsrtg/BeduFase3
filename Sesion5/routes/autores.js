// Llamamos al Router de Express
const router = require('express').Router();

// Llamamos a las funciones
const {
    createAuthor,
    getAuthor, getAuthors,
    updateAuthor,
    deleteAuthor
} = require('../controllers/autores');

// Definimos la URL de las funciones
router.get('/', getAuthors);
// router.get('/:id', getAuthor);
router.post('/', createAuthor);
router.patch('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;