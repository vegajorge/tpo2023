document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var domicilio = document.getElementById('domicilio').value;
    var telefono = document.getElementById('telefono').value;
    var fecha = document.getElementById('fecha').value;
    var email = document.getElementById('email').value;
    var consulta = document.getElementById('consulta').value;
  
    var datos = {
      from: 'Remitente <vegajorgeluis@live.com>',
      to: 'mail@mail.com',
      subject: 'Nuevo mensaje de contacto',
      text: 'Nombre: ' + nombre + '\nApellido: ' + apellido +  '\nDomicilio: ' + domicilio +   '\nFecha: ' + fecha +  '\nTelefono: ' + telefono +  '\nEmail: ' + email + '\nConsulta: ' + consulta
    };
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.mailgun.net/v3/sandbox86532404748d4745b3886b5a77dc5c9d.mailgun.org');
    /*xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');*/
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa('api:90b386f8b36f3b38e530bb9958fb2121-6b161b0a-e4f6f2cd'));
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Correo enviado exitosamente');
        document.getElementById('formulario').reset();
      } else {
        alert('Error al enviar el correo');
      }
    };
    xhr.send('from=' + datos.from + '&to=' + datos.to + '&subject=' + datos.subject + '&text=' + datos.text);

   
  return false; // Evitar el envío del formulario
})