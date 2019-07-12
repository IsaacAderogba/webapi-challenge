const express = require('express');
const Actions = require('../../data/helpers/actionModel')

const router = express.Router();

// POST
router.post('/', (req, res) => {
  res.send('api/actions/ post')
})

// GET
router.get('/', (req, res) => {
  res.send('api/actions/ get')
})

router.get('/:id', (req, res) => {
  res.send('api/actions/:id get')
})

// PUT
router.put('/:id', (req, res) => {
  res.send('api/actions/:id put')
})

// DELETE
router.delete('/:id', (req, res) => {
  res.send('api/actions/:id del')
})

// validate action
// validateID

module.exports = router;