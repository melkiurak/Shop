const catalog = [
    {id: 0, name: 'Phone', price: 100, description: 'This is a phone'},
    {id: 1, name: 'Mouse', price: 500, description: 'This is a Mouse'},
    {id: 2, name: 'Gamepad', price: 1040, description: 'This is a Gamepad'},
]
const catalogContainer = document.getElementById('catalog');

catalog.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>${item.price}</p>
        <button class="add-to-cart>Add to cart</button>
    `;
    const AddToCartButton = card.querySelector('.add-to-cart');
    catalogContainer.appendChild(card);
});

function addToCart() {
    console.log('Add to cart');
}