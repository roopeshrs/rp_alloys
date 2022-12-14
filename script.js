const sliderContainer = document.querySelector('.why-us .slider');
let isDragging  = false;

sliderContainer.addEventListener('mousemove', (e)=>{
    if(!isDragging) return;
    sliderContainer.scrollLeft -= e.movementX;
})

sliderContainer.addEventListener('mousedown', ()=> isDragging = true)
document.addEventListener('mouseup', ()=> isDragging = false)