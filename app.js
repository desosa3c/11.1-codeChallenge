//Solicitud POST.
async function enviarDatosAlServidor(datos) {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });

    if (respuesta.ok) {
      const data = await respuesta.json();
      console.log('Respuesta del servidor:', data);
    } else {
      console.error('Error al enviar los datos al servidor.');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}

//Enviar form.
function enviarFormulario() {
  const nombre = document.getElementById('name').value;
  const apellido = document.getElementById('apellido').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;

  const datosFormulario = {
    nombre,
    apellido,
    fechaNacimiento,
  };

  enviarDatosAlServidor(datosFormulario);
}
