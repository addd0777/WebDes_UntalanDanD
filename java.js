
const nav = document.querySelector('nav');
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
})


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });