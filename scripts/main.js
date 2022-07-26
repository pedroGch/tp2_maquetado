let menutoggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
$(".sub-menu-info").hide();
menutoggle.onclick =  function(){
  menutoggle.classList.toggle('active');
  menu.classList.toggle('mostrar');
  
}

$(".menu-info").click(function (){
  $('.sub-menu-info').slideToggle();
});
$(".menu-turismo").click(function (){
  $('.sub-menu-turismo').slideToggle();
});
