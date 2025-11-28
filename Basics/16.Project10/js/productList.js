document.addEventListener("DOMContentLoaded", async () => {
  async function fetchProducts() {
    const response = await axios("https://fakestoreapi.com/products");
    console.log(response);
    return response.data;
  }

  async function fetchProductsByCategory(category) {
    const response = await axios(
      `https://fakestoreapi.com/products/category/${category}`
    );
    console.log("category specific", response.data);
    return response.data;
  }

  const downloadedProducts = await fetchProducts();

  async function populateProducts(flag, customProduct) {
    let products = customProduct;

    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());

    console.log(queryParamsObject);

    if (flag === false) {
      if (queryParamsObject["category"]) {
        products = await fetchProductsByCategory(queryParamsObject["category"]);
      } else {
        products = downloadedProducts;
      }
    }

    const productList = document.getElementById("productList");
    products.forEach((product) => {
      const productItem = document.createElement("a");
      productItem.target = "_blank";
      productItem.classList.add(
        "product-item",
        "text-decoration-none",
        "d-inline-block"
      );
      productItem.href = "productDetails.html";

      const productImage = document.createElement("div");
      const productName = document.createElement("div");
      const productPrice = document.createElement("div");

      productImage.classList.add("product-img");
      productName.classList.add("product-name", "text-center");
      productPrice.classList.add("product-price", "text-center");

      productName.textContent = product.title.substring(0, 12) + "...";
      productPrice.innerHTML = `&#x24; ${product.price}`;

      const imageInsideProductImage = document.createElement("img");
      imageInsideProductImage.src = product.image;
      console.log(product.image);

      // append divs
      productImage.appendChild(imageInsideProductImage);
      productItem.appendChild(productImage);
      productItem.appendChild(productName);
      productItem.appendChild(productPrice);
      productList.appendChild(productItem);
    });
  }

  async function populateCategories() {
    const categories = await fetchProductsByCategory();
    // const loaderBackdrop = document.getElementById('loader-backdrop')
    const categoryList = document.getElementById("categoryList");
    categories.forEach((category) => {
      // const categoryHolder = document.createElement("div");
      const categoryLink = document.createElement("a");
      categoryLink.classList.add("d-flex", "text-decoration-none");
      categoryLink.href = `productList.html?category/${category}`;
      categoryLink.textContent = category;
      // categoryHolder.classList.add('category-item', 'd-flex', 'align-items-center', 'justify-content-center')
      // categoryHolder.appendChild(categoryLink);
      // categoryList.appendChild(categoryHolder);
      categoryList.appendChild(categoryLink);
    });
  }

  async function downloadContentAndPopulate() {
    Promise.all([populateProducts(false), populateCategories()]).then(() => {
      // await populateProducts(false);
      // await populateCategories();
      const loaderBackdrop = document.getElementById("loader-backdrop");
      loaderBackdrop.style.display = "none";
    });
  }

  downloadContentAndPopulate();

  const filterSearch = document.getElementById("search");
  filterSearch.addEventListener("click", async () => {
    const productList = document.getElementById("productList");
    const minPrice = Number(document.getElementById("minPrice").value);
    const maxPrice = Number(document.getElementById("maxPrice").value);
    const products = downloadedProducts;
    const filteredProducts = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    productList.innerHTML = "";
    populateProducts(true, filteredProducts);
  });

  const resetFilter = document.getElementById("clear");
  resetFilter.addEventListener("click", () => {
    window.location.reload();
  });
});
