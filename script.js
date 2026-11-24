const navToggler = document.querySelector('.toggler-btn');
const logoContainer = document.querySelector('.off-canva');
const togglebtnclose = document.querySelector('.toggle-btn-close');

navToggler.addEventListener('click', function(){
    logoContainer.classList.toggle('translate-x-full');
    logoContainer.classList.toggle('shadow-2xl')
    // logoContainer.classList.remove('onclicking');
});

togglebtnclose.addEventListener('click', () =>{
    logoContainer.classList.toggle('translate-x-full');
    logoContainer.classList.toggle('shadow-2xl')
    // logoContainer.classList.add('onclicking');
    
});
console.log(logoContainer);
console.log(navToggler);

const navbar = document.querySelector('.header-bg');
function navbBackground (){
    if(window.scrollY > 50){
        navbar.classList.toggle("z-50");
        navbar.classList.toggle("fixed");
        navbar.classList.toggle("bg-white");
        navbar.classList.toggle("shadow-2xl");
    }else{
        navbar.classList.toggle("z-50");
        navbar.classList.toggle("fixed");
        navbar.classList.toggle("bg-white");
        navbar.classList.toggle("shadow-2xl");
    }
    window.addEventListener("scroll", navbBackground, {passive: true});

};

navbBackground();

console.log(navbar);

