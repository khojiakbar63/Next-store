
// Catalog Panel
var toggle__btn = document.getElementById('toggle');
var catalogShow = document.getElementById('catalog');
var icon__menu = document.getElementById('icon-menu');
// Catalog Pannel
catalogShow.addEventListener('click', function(){
    catalog.classList.add('catalog_show');
})




var userClick = document.getElementById("user");
var sign__up__wrapper = document.getElementById('sign__up__wrapper');
var close_sign_wrapper = document.getElementById('close_sign-up-modal');
var loader = document.getElementById('blur_bg');


toggle__btn.addEventListener('click', function(){
    catalogPanel.classList.toggle('catalog_show');

    if(catalogPanel.classList.contains('catalog_show')){
        icon__menu.innerHTML='<i class="bx bx-x"></i>'
    }
    else(
        icon__menu.innerHTML='<i class="bx bx-menu"></i>'

    )
})
