document.addEventListener('DOMContentLoaded', function () {
 
  document.querySelector('#interaktiv').addEventListener('click', klickverarbeitung);
 
  function klickverarbeitung () {
    document.querySelector('output').innerText = ' Geklickt \n';
  }
	  
});
