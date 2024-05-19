const humburgar = document.getElementById('btn');
const nav = document.getElementById('nav');

humburgar.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    humburgar.classList.toggle('act')
})

