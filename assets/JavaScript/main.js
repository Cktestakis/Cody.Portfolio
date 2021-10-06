const items = document.querySelectorAll('.item')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const total = items.length;
const lastItem = total -1;
let current = 0;

items[0].classList.add('active');

next.addEventListener('click', e=> {
    let next = current;
    current++;
    setActive(next, current);
});

prev.addEventListener('click', e=> {
    let prev = current;
    current--;
    setActive(prev, current);
});

function setActive(prev, next) {
    let active = current;

    if (next > lastItem) {
        active = 0;
        current = 0;
    }
    if (next < 0) {
        active = lastItem;
        current = lastItem;
    }   
    items[prev].classList.remove('active');
    items[active].classList.add('active');

}