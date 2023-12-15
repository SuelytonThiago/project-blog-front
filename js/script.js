const html = document.querySelector('html')
const btn = document.getElementById('chk');

btn.addEventListener('change', function(){
    html.classList.toggle('dark-mode')
})