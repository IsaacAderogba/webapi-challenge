# Sprint Challenge: Express and Node.js - Projects & Actions - Isaac

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Building RESTful Web APIs with Express and Node.js, Server-side Routing, Express Middleware & Deployment and Good Practices. In your challenge for this Sprint, you will demonstrate proficiency by creating an Web API using Node.js and Express.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Building RESTful APIs with Node.js and Express; and your command of the concepts and techniques taught during the Express and Node.js, Server-side Routing, Express Middleware & Deployment and Good Practices modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this challenge, create a web API around the following resources: `Projects` and `Actions`.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] Mention two parts of Express that you learned about this week.

1 - Learned about Route Handlers, and how they essentially manage the logic of a server through request and response objects.
2 - Learned about Express' role in the ecosystem, and that it is pretty much a middleman that then connects to a database

- [x] Describe Middleware?

If we think of a function's execution as being a funnel from start to finish, middleware is the additional logic that we place at different parts of the funnel. It allows us to extend the functionality of something.

- [x] Describe a Resource?

A resource is the thing that our application cares about - for instance, in this project we had two main resources - that of actions and projects.

- [x] What can the API return to help clients know if a request was successful?

APIs can return different status requests to allow clients to infer whether the request was a success, or whether there existed a particular error. We can also return error objects which provide more information on the error if needs be.

- [x] How can we partition our application into sub-applications?

We can partition our application by breaking routes into different sub-folders and seperating logic that should exist in the index.js file from that that should exist in the server.js file

## Project Setup

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add your _Project Manager_ as collaborator on Github.
- [x] Clone your forked version of the Repository.
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on this Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master on your fork. **Please don't merge your own pull request.**
- [x] Add your _Project Manager_ as a Reviewer on the Pull-request
- [x] Your _Project Manager_ will count the challenge as done by merging the branch into _master_.

## Database Persistence Helpers

Please read the following before implementing the Minimum Viable Product:

The `/data/helpers` folder includes files you can use to manage the persistence of _project_ and _action_ data. These files are `projectModel.js` and `actionModel.js`. Both files publish the following api, which you can use to store, modify and retrieve each resource:

**All these helper methods return a promise. Please you .then().catch() or async/await**

- `get()`: calling get returns an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
- `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.
- `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.
- `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

The `projectModel.js` helper includes an extra method called `getProjectActions()` that takes a _project id_ as it's only argument and returns a list of all the _actions_ for the _project_.

## Minimum Viable Product

- [x] Configure an _npm script_ named _"server"_ that will execute your code using _nodemon_. Make _nodemon_ be a development time dependency only, it shouldn't be deployed to production.
- [x] Configure an _npm script_ named _"start"_ that will execute your code using _node_.

Design and build the necessary endpoints to:

- [ ] Perform CRUD operations on _projects_ and _actions_. When adding an action, make sure the `project_id` provided belongs to an existing `project`. If you try to add an action with an `id` of 3 and there is no project with that `id` the database will return an error.
- [ ] Retrieve the list of actions for a project.

### Database Schemas

The _schemas_ (properties and data type of each property) used to store and retrieve the resources inside the included database (`lambda.sqlite3`) is described below.

#### Projects

| Field       | Data Type | Metadata                                                                    |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | number    | no need to provide it when creating projects, the database will generate it |
| name        | string    | required.                                                                   |
| description | string    | required.                                                                   |
| completed   | boolean   | used to indicate if the project has been completed, not required            |

#### Actions

| Field       | Data Type | Metadata                                                                                         |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| id          | number    | no need to provide it when creating posts, the database will automatically generate it.          |
| project_id  | number    | required, must be the id of an existing project.                                                 |
| description | string    | up to 128 characters long, required.                                                             |
| notes       | string    | no size limit, required. Used to record additional notes or requirements to complete the action. |
| completed   | boolean   | used to indicate if the action has been completed, not required                                  |

We have provided test data for all the resources.

Now that we have a way to add, update, remove and retrieve data from the provided database, it's time to work on the API.

## Stretch Goal

- Use `create-react-app` to create an application in a separate folder (outside the API project folder). Name it anything you want.
- From the React application show a list of all _projects_ using the API you built.
- Add functionality to show the details of a project, including its actions, when clicking a project name in the list. Use React Router to navigate to a separate route to show the project details.
- Add styling! Perhaps with [`styled-components`](https://www.styled-components.com/).
