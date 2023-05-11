function enviaMail() {
  var params = {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    domicilio: document.getElementById('domicilio').value,
    telefono: document.getElementById('telefono').value,
    email: document.getElementById('email').value,
    consulta: document.getElementById('consulta').value,
 };

  const serviceID = "service_0kxwpbj";
  const templateID = "template_u0n6llf";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("domicilio").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";
        document.getElementById("consulta").value = "";
        console.log(res);
    })
    .catch(err=>console.log(err));
}