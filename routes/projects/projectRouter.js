const express = require('express');
const Projects = require('../../data/helpers/projectModel')

const router = express.Router();

// POST
router.post('/', (req, res) => {
  res.send('api/projects/ post')
})

// GET
router.get('/', (req, res) => {
  res.send('api/projects/ get')
})

router.get('/:id', (req, res) => {
  res.send('api/projects/:id get')
})

// PUT
router.put('/:id', (req, res) => {
  res.send('api/projects/:id put')
})

// DELETE
router.delete('/:id', (req, res) => {
  res.send('api/projects/:id del')
})

// validate post
// validateID

module.exports = router;