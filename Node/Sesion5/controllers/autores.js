const express = require('express')
const router = express.Router()

let autor = [
  {
    id: 1,
    firstName: 'Gonzalo',
    lastName: 'Ramos',
    profilePic: 'image.jpg',
    bio: 'Aquí va la biografía',
    rol: 'Autor'
  }
]
// GET -> Obtener autores
function getAuthors(){
router.get('/', (request, response) => {
  response.send(autor) 
})
}
// POST -> Añadir autor
function createAuthor(){
router.post('/', (request,response) => {
  autor.push(request.body)
  response.send(`Autor ${request.body.id} agregado`)
})}
// PATCH -> Editar autor
function updateAuthor(){
router.patch('/', (request,response) => {
  autor[request.body.id - 1] = request.body
  response.send(`Autor ${request.body.id} modificado`)
})}
// DELETE -> Eliminar autor
function deleteAuthor(){
router.delete('/', (request,response) => {
  autor = autor.filter(note => note.id !== request.body.id)
  response.send(`Autor ${request.body.id} eliminado`)
})}

module.exports = {
    createAuthor,
    getAuthors,
    updateAuthor,
    deleteAuthor
}