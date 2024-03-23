function scroll(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }  
} 

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener('click', () => {
    scroll('.header');
});
link2.addEventListener('click', () => {
    scroll('.header', 1);
});
link3.addEventListener('click', () => {
    scroll('.column');
});