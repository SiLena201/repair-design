document.addEventListener('DOMContentLoaded', function(event){ 
 const modal = document.querySelector('.modal');
 const modalBtn = document.querySelectorAll('[data-toggle=modal');
 const closeBtn = document.querySelector('.modal__close');
 const switchNodal = () => {
  modal.classList.toggle('modal--visible');
 }

 modalBtn.forEach(element => {
  element.addEventListener('click', switchNodal);
 });

 closeBtn.addEventListener('click', switchNodal);
 
});