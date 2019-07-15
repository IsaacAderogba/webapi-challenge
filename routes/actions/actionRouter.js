const express = require("express");
const Actions = require("../../data/helpers/actionModel");

const router = express.Router();

// POST
router.post("/", validateAction, async (req, res) => {
  try {
    const createdProject = await Actions.insert(req.newAction);
    res.status(201).json(createdProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET
router.get("/", async (req, res) => {
  try {
    const retrievedActions = await Actions.get();
    res.status(200).json(retrievedActions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", validateActionId, async (req, res) => {
  try {
    const retrievedAction = await Actions.get(req.params.id);
    res.status(200).json(retrievedAction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT
router.put("/:id", validateActionId, validateAction, async (req, res) => {
  try {
    const updatedAction = await Actions.update(req.params.id, req.newAction);
    res.status(200).json(updatedAction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", validateActionId, async (req, res) => {
  try {
    const deleteStatus = await Actions.remove(req.params.id);
    if (deleteStatus) {
      res.status(200).json(req.actions);
    } else {
      res.status(400).json({ message: "This action could not be deleted" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// validate action
function validateAction(req, res, next) {
  const { project_id, description, notes } = req.body;

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Missing action data" });
  } else if (!project_id || !description || !notes) {
    res.status(400).json({
      message: "Missing required project_id, description or notes field"
    });
  } else if (description.length > 128) {
    res
      .status(400)
      .json({ message: "description field is greater than 128 characters" });
  } else {
    req.newAction = { project_id, description, notes };
    next();
  }
}

// validateID
async function validateActionId(req, res, next) {
  const { id } = req.params;
  if (Number.isInteger(parseInt(id, 10))) {
    try {
      const actions = await Actions.get(id);
      if (actions) {
        req.actions = actions;
        next();
      } else {
        res.status(404).json({
          message: `The action with Id of '${id}' could not be found`
        });
      }
    } catch {
      res.status(500).json({ message: "The action could not be retrieved" });
    }
  } else {
    res.status(400).json({ message: `The Id of '${id}' is not valid` });
  }
}

module.exports = router;
