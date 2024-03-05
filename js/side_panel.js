// Side panel

var hamburgerMenu = document.getElementById('hamburger_menu');
var closeIcon = document.getElementById('close');
var sidePanel = document.getElementById('account');

hamburgerMenu.addEventListener('click', function(){
    sidePanel.classList.add('show__side_panel')
})

closeIcon.addEventListener('click', function(){
    sidePanel.classList.toggle('show__side_panel')
})