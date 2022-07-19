let menutoggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
$(".sub-menu-info").hide();
menutoggle.onclick =  function(){
  menutoggle.classList.toggle('active');
  menu.classList.toggle('mostrar');
  
}
let opMenuInfo = document.querySelector('.op-info');
opMenuInfo.onclick= function(){
  $(".sub-menu-info").toggle();

}

