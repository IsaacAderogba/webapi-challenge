const express = require('express');
const Projects = require('../../data/helpers/projectModel')

const router = express.Router();

// POST
router.post('/', validateProject, async (req, res) => {
  try {
    const createdProject = await Projects.insert(req.newProject);
    res.status(201).json(createdProject);
  } catch (err) {
    res.status(500).json({error: err.message})
  }
})

// GET
router.get('/', (req, res) => {
  res.send('api/projects/ get')
})

router.get('/:id', validateProjectId, (req, res) => {
  res.send('api/projects/:id get')
})

// PUT
router.put('/:id', validateProjectId, validateProject,  (req, res) => {
  res.send('api/projects/:id put')
})

// DELETE
router.delete('/:id', validateProjectId, (req, res) => {
  res.send('api/projects/:id del')
})

// validate post middleware
function validateProject(req, res, next) {
  const { name, description } = req.body;

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Missing project data" });
  } else if (!name || !description) {
    res.status(400).json({ message: "Missing required name or description field" });
  } else {
    req.newProject = { name, description }
    next();
  }
}
// validateID middleware
async function validateProjectId(req, res, next) {
  const { id } = req.params;
  if (Number.isInteger(parseInt(id, 10))) {
    try {
      const project = await Projects.get(id);
      if (project) {
        req.project = project;
        next();
      } else {
        res
          .status(404)
          .json({ message: `The project with Id of '${id}' could not be found` });
      }
    } catch {
      res.status(500).json({ message: "The project could not be retrieved" });
    }
  } else {
    res.status(400).json({ message: `The Id of '${id}' is not valid` });
  }
}

module.exports = router;