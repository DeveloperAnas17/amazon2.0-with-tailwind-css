function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          make: doc.data().make,
          rating: doc.data().rating,
          price: doc.data().price,
        });
      });
      generateItems(items);
    });
}

function generateItems(items) {
  let itemHTML = "";
  items.forEach((item) => {
    let doc = document.createElement("div");
    itemHTML += `<div class="main-product m-auto">

    <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
        <img
        class="w-full h-full object-contain"
        src=${item.image}
        alt=""
        />
      </div>
      <div class="product-name text-gray-700 font-bold mt-2 text-sm">
          ${item.name}
      </div>
      <div class="product-make text-green-700 font-bold">
          ${item.make}
      </div>
      <div class="product-rating text-yellow-600 my-1">
          ⭐⭐⭐⭐ ${item.rating}
      </div>
      <div class="product-price font-bold text-gray-700 text-lg">
          ${item.price}
      </div>

      <button class="add-to-cart bg-yellow-500 mt-2 text-white w-40 p-3 hover:bg-yellow-600">Add To Cart</button>
</div>`;
  });

  document.querySelector(".main-section-products").innerHTML = itemHTML;
}

getItems();
