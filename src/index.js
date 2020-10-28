const { response } = require('express');
const express = require('express');
const {v4: uuid_v4} = require('uuid');
const app = express();
 
//the "use" serves to add some kind of functions that all the wheels
//will go through it
app.use(express.json());

const projects = [];

//seek information from the bach end
app.get("/projects", (request, response) => {
    //return response.send("Hello World");
    //return response.json({message: 'Hello World'});
    return response.json(projects);
});

//create information on the back end
app.post("/projects", (request, response) => {
    const {title, owner} = request.query;
    const project = { id: uuid_v4(), title, owner};
    projects.push(project);
    return response.json(project);
});

//change back end information
app.put("/projects/:id", (request, response) => {
    const { id } = request.params;
    const {title, owner} = request.query; //
    const projectIndex = projects.findIndex(answer => answer.id === id);
    if(projectIndex < 0) return response.status(400).json({ error: 'Project not found.'});
    projects[projectIndex] = { id, title, owner};
    return response.json(projects[projectIndex]);
});

//delete back end information
app.delete("/projects/:id", (request, response) => {
    const { id } = request.params;
    const projectIndex = projects.findIndex(x => x.id === id);
    if(projectIndex < 0) return response.status(400).json({ error: 'Project not found.'});
    projects.splice(projectIndex, 1);
    return response.status(204).send();
});




//second argument, receives a function that runs automatically that
//returns a message when it is updated
app.listen(3333, () => {
    console.log('Back-end started!!!');
});