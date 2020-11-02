const express = require('express');

const app = express();
app.use(express.json());
app.get('/projects',(request, response)=>{
  
  return response.json([
    'Project 1',
    'Project 2'
  ])
})
app.post('/projects',(request, response)=>{
  const {title, name} = request.query;/*query parameter*/ //desestruturacao de um objeto

  console.log(title,name);
  return response.json([
    'Project 1',
    'Project 2',
    'Project 3'
  ])
})

app.put('/projects/:id'/*<- route parameter*/,(request, response)=>{
  
  const param = request.params;
  console.log(param);

  return response.json([
    'Project 1',
    'Project 2',
    'Project 3'
  ])
})

app.delete('/projects/:id',(request, response)=>{
  return response.json([
    'Project 4',
    'Project 2',
    'Project 3'
  ])
})

app.listen(3333,()=>{
  console.log('Back end started');
})