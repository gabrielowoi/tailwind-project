const navToggler = document.querySelector('.toggler-btn');
const logoContainer = document.querySelector('.off-canva');
const togglebtnclose = document.querySelector('.toggle-btn-close');

navToggler.addEventListener('click', function(){
    logoContainer.classList.toggle('translate-x-full');
    // logoContainer.classList.remove('onclicking');
});

togglebtnclose.addEventListener('click', () =>{
    logoContainer.classList.toggle('translate-x-full');
    // logoContainer.classList.add('onclicking');
    
});
console.log(logoContainer);
console.log(navToggler);