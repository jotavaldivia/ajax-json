var titulo = document.getElementById('titulo')
titulo.innerHTML = "Lista Clientes"

//var titulo = $("#titulo")
//console.log(titulo)
//titulo.html("Lista de Clientes")

$.ajax({
    type: "GET",
    dataType: "text",
    url: "data.json",
})
 .done(function(data) {
  console.log(data)
  newData = JSON.parse(data);
  console.log(newData)

  var res = document.querySelector('.contenido')
 
// alt + 96
  for(var item of newData){
   console.log(item.nombre)
   res.innerHTML += `
   
    
   
   <tr>
   <td> <a href="${item.url}">${item.nombre}</a></td>
   <td>  ${item.email}  </td>
   <td>  ${item.edad}  </td>
   <tr>
   `
  }
 })
 .fail(function(e) {
         console.log( "La solicitud a fallado: " + e);
});





