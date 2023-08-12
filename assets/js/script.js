const modalContainer= document.querySelector('.modalContainer');
const modalTriggers=document.querySelectorAll('.trigger')

function toggleModal(){
    modalContainer.classList.toggle("active");
}
modalTriggers.forEach(trigger =>trigger.addEventListener("click",toggleModal));
