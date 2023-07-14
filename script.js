document.querySelector('.fa-envelope-open').parentElement.addEventListener('click', function() {
  var email = 'victormoraisjoao@gmail.com'; // substitua pelo endereço de e-mail específico
  window.open('mailto:' + email);
  return false;
});

document.querySelector('.fa-github').parentElement.addEventListener('click', function() {
  window.open('https://github.com/jvictorms', '_blank');
  return false;
});

document.querySelector('.fa-linkedin-in').parentElement.addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/jvictorms/', '_blank');
  return false;
});

document.getElementById("Sobre Mim").addEventListener("click", function() {
  document.getElementById("secao-destino").scrollIntoView({ behavior: 'smooth' });
});
