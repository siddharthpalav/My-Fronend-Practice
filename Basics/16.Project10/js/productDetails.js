console.log("product details loaded");
document.addEventListener("DOMContentLoaded", () => {
  async function populateproduct() {
    const queryParams = getQueryParams();

    if (queryParams["id"]) {
      const productId = queryParams["id"];
      const product = await fetchProductById(productId);

      const productName = document.getElementById("product-name");
      const productPrice = document.getElementById("product-price");
      const productDescription = document.getElementById(
        "product-description-data"
      );
      const productImage = document.getElementById("product-img");

      productName.textContent = product.data.title;
      productDescription.textContent = product.data.description;
      productPrice.textContent = product.data.price;
      productImage.src = product.data.image;
      removeLoader();
    }
  }

  populateproduct();
});
