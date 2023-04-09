
const filterElement = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li');

filterElement.addEventListener('input', filterCards);

function filterCards() {
    if (filterElement.value !== '') {
        const query = filterElement.value.toLowerCase();
        for (let card of cards) {
            let title = card.querySelector('h2');
            title = title.textContent.toLocaleLowerCase();
            card.style.display = !title.includes(query) ? 'none' : 'block';
        }
    } else {
        for(let card of cards) {
            card.style.display = 'block';
        }
    }
}