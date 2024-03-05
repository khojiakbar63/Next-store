var userClick = document.getElementById("user");
var sign__up__wrapper = document.getElementById('sign__up__wrapper');
var close_sign_wrapper = document.getElementById('close_sign-up-modal');
var loader = document.getElementById('blur_bg');

// User sign up show

userClick.addEventListener('click', function()
{
   sign__up__wrapper.classList.add('active-signUp');
})

// User sign up remove

close_sign_wrapper.addEventListener('click', function()
{
   sign__up__wrapper.classList.remove('active-signUp');
})
