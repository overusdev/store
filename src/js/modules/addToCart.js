const addToCart = (function () {
    const productItem = document.querySelectorAll('.b-product-item');

    for (let i = 0; i < productItem.length; i += 1) {
        productItem[i].addEventListener('click', () => {
            productItem[i].classList.toggle("b-product-item_state_active");
        });
    }

})();
