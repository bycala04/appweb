const boton = document.createElement('button');
boton.textContent = 'Haz clic en mí';

document.body.appendChild(boton);

boton.addEventListener('click', function() {
  alert('¡Has hecho clic en el botón!');
});