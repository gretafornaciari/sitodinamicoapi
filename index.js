const express = require("express")
const fetch = require('node-fetch');
const app = new express()


  var richiesta = new Request('https://jsonplaceholder.typicode.com/todos/1', {
    method: "post",
    headers: new Headers({
       "Content-Type": "application/json"
    }),
    body: JSON.stringify({
       titolo: "Un articolo",
       autore: "Mario Rossi"
    })
 });
 fetch(richiesta).then(response => response.json()) .then(json => console.log(json))

  
app.listen(3000, () => console.log("server listening on port 3000"))