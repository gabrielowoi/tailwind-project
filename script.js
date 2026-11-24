const navToggler = document.querySelector('.toggler-btn');
const logoContainer = document.querySelector('.off-canva');
const togglebtnclose = document.querySelector('.toggle-btn-close');

navToggler.addEventListener('click', function(){
    logoContainer.classList.toggle('translate-x-full');
    logoContainer.classList.toggle('shadow-2xl')
    logoContainer.classList.add('bg-white')
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
        navbar.classList.add("z-50");
        navbar.classList.add("fixed");
        navbar.classList.add("bg-white");
        navbar.classList.add("shadow-xl");
        navbar.classList.add("top-0");
        
    }else{
        navbar.classList.remove("z-50");
        navbar.classList.remove("fixed");
        navbar.classList.remove("bg-white");
        navbar.classList.remove("shadow-2xl");
        logoContainer.classList.remove('bg-white')
        navbar.classList.remove("top-0");
    }
    window.addEventListener("scroll", navbBackground, {passive:true});

};

navbBackground();

console.log(navbar);

