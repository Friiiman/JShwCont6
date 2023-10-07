fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const cardsContainer = document.querySelector(".featured-items");
    data.forEach(({ imgSrc, productName, productDescr, productPrice }) => {
      const productCardEl = `
      <a href="#" class="catalog-card">
            <div class="catalog-card__img">
                <img src="${imgSrc}" alt="image" class="catalog-card__img-item">
                <button class="catalog-card__img-button">
                    <img src="img/shop-cart.svg" alt="shop cart">Add
                    to Cart
                </button>
            </div>
            <h3 class="catalog-card__title">${productName}</h3>
            <p class="catalog-card__text">${productDescr}</p>
            <span class="catalog-card__price">$${productPrice}</span>
        </a>
      `;
      cardsContainer.insertAdjacentHTML("beforeend", productCardEl);
    });
  });
