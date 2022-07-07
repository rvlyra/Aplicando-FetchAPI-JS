fetch("https://reqres.in/api/users",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify({name:"Lucas"}),
})
  .then((resposta)resposta.json())
  .then((data)console.log(data));


// https://reqres.in/

// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API
