 const buttons = document.querySelectorAll('.story-btn');

 buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        button.classList.toggle('change');
        button.nextElementSibling.classList.toggle('change');
    })
 })