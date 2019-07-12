const express = require('express');
const Projects = require('../../data/helpers/projectModel')

const router = express.Router();

// POST
router.post('/', validateProject, (req, res) => {
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
router.put('/:id', validateProject, (req, res) => {
  res.send('api/projects/:id put')
})

// DELETE
router.delete('/:id', (req, res) => {
  res.send('api/projects/:id del')
})

// validate post
async function validateProject(req, res, next) {
  const { name, description } = req.body;

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Missing project data" });
  } else if (!name || !description) {
    res.status(400).json({ message: "Missing required name or description field" });
  } else {
    req.project = { name, description }
    next();
  }
}
// validateID

module.exports = router;