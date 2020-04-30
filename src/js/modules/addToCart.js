export const addToCart = () => {
    const productItem = document.querySelectorAll('.b-product-item');
    const cart        = document.querySelector('.b-cart');
    const cartItemTemplate = (title, price) => {
        return (
            `<div class="b-cart__item">
                <h2 class="b-cart__item-title">${title}</h2>
                <p class="b-cart__item-price">${price}</p>
            </div>
            `
        );
    };

    for (let i = 0; i < productItem.length; i += 1) {
        productItem[i].addEventListener('click', () => {
            productItem[i].classList.toggle("b-product-item_state_active");
            cart.insertAdjacentHTML('afterBegin', cartItemTemplate(productItem[i].textContent, 200));
        });
    }

};
