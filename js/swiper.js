const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,

   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar

 });







// toggle__btn.addEventListener('click', function(){
//     catalogPanel.classList.toggle('catalog_show');

//     if(catalogPanel.classList.contains('catalog_show')){
//         icon__menu.innerHTML='<i class="bx bx-x"></i>'
//     }
//     else(
//         icon__menu.innerHTML='<i class="bx bx-menu"></i>'

//     )
// })



// var userClick = document.getElementById("user");
// var sign__up__wrapper = document.getElementById('sign__up__wrapper');
// var close_sign_wrapper = document.getElementById('close_sign-up-modal');
// var loader = document.getElementById('blur_bg');

// // User sign up show

//  userClick.addEventListener('click', function()
//  {
//     sign__up__wrapper.classList.add('active-signUp');
//  })

// // User sign up remove

//  close_sign_wrapper.addEventListener('click', function()
//  {
//     sign__up__wrapper.classList.remove('active-signUp');
// })




// Loader remove
window.addEventListener('load', function(){
    loader.classList.add('removeLoader');
})




// // Catalog Panel
// var toggle__btn = document.getElementById('toggle');
// var catalogPanel = document.getElementById('catalog');
// var icon__menu = document.getElementById('icon-menu');
// // Catalog Pannel
// catalogShow.addEventListener('click', function(){
//     catalog.classList.add('catalog_show');
// })


// // Side panel

// var hamburgerMenu = document.getElementById('hamburger_menu');
// var closeIcon = document.getElementById('close');
// var sidePanel = document.getElementById('account');

// hamburgerMenu.addEventListener('click', function(){
//     sidePanel.classList.add('show__side_panel')
// })

// closeIcon.addEventListener('click', function(){
//     sidePanel.classList.toggle('show__side_panel')
// })