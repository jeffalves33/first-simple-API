const { response } = require('express');
const express = require('express');
const app = express();


//seek information from the bach end
app.get("/projects", (request, response) => {
    //return response.send("Hello World");
    //return response.json({message: 'Hello World'});
    return response.json([
        'Project 1',
        'Project 2',
    ]);
});

//create information on the back end
app.set("/projects", (require, response) => {
    return response.json([
        'Project 1',
        'Project 2',
    ]);
});

//change back end information
app.put("/projects/:id", (require, response) => {
    return response.json([
        'Project 1',
        'Project 2',
    ]);
});

//delete back end information
app.delete("/projects/:id", (require, response) => {
    return response.json([
        'Project 1',
        'Project 2',
    ]);
});




//segundo argumento, recebe uma função q roda automática q retorna uma 
//msg quando é atualizado
app.listen(3333, () => {
    console.log('Back-end started!!!');
});