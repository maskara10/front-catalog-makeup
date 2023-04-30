let dados;
var main = document.querySelector(".main");

function getProducts() {
  for (let index = 0; index < 10; index++) {
    main.innerHTML += `
    <div class="product">
        <img class="img_product" src="${
          dados[index].image_link
        }" alt="exemplo">
        <p class="name_product">${dados[index].name}</p>
        <a class="marca_product">${
          dados[index].brand
        }</a><a class="price_product" >R$ ${dados[index].price * 5.5}</a>
    </div>
    `;
  }
}

fetch("http://127.0.0.1:5500/products.json") //fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
  .then((response) => response.json())
  .then((json) => {
    dados = json;
    for (let index = 0; index < dados.length; index++) {
      dados[index].price = parseFloat(dados[index].price)
    }
    getProducts()
    console.log(dados);

  });

function buscaNome() {
  main.innerHTML = "";
  var inputText = document.querySelector(".buscar_nome").value;
  if (inputText == "") {
    getProducts()
  }
  var buscar_nome = dados.filter(
    (item) => item.name.toLowerCase() == inputText.toLowerCase()
  );
  console.log(buscar_nome);
  for (let index = 0; index < buscar_nome.length; index++) {
    main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${
            buscar_nome[index].image_link
          }" alt="exemplo">
          <p class="name_product">${buscar_nome[index].name}</p>
          <a class="marca_product">${
            buscar_nome[index].brand
          }</a><a class="price_product" >R$ ${
      buscar_nome[index].price * 5.5
    }</a>
      </div>
      `;
  }
}

function selectItens() {
  var select = document.getElementById("rating");
  if (select.value == "a-z") {
    dados.sort((i1, i2) => {
      if (i1.name < i2.name) {
        return -1;
      } else if (i1.name > i2.name) {
        return 1;
      } else {
        return 0;
      }
    });
    main.innerHTML = "";
    for (let index = 0; index < 10; index++) {
      main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${
            dados[index].image_link
          }" alt="exemplo">
          <p class="name_product">${dados[index].name}</p>
          <a class="marca_product">${
            dados[index].brand
          }</a><a class="price_product" >R$ ${dados[index].price * 5.5}</a>
      </div>
      `;
    }
  }

  if (select.value == "maiores-precos") {
    main.innerHTML = "";
    dados.sort((a, b) => b.price - a.price)
    // dados.sort((i1, i2) => {
    //   if (i1.price > i2.price) {
    //     return -1;
    //   } else if (i1.price < i2.price) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    for (let index = 0; index < 10; index++) {
      main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${
            dados[index].image_link
          }" alt="exemplo">
          <p class="name_product">${dados[index].name}</p>
          <a class="marca_product">${
            dados[index].brand
          }</a><a class="price_product" >R$ ${dados[index].price * 5.5}</a>
      </div>
      `;
    }
  }

  if (select.value == "menores-precos") {
    dados.sort((i1, i2) => {
      if (i1.price < i2.price) {
        return -1;
      } else if (i1.price > i2.price) {
        return 1;
      } else {
        return 0;
      }
    });
    main.innerHTML = "";
    for (let index = 0; index < 10; index++) {
      main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${
            dados[index].image_link
          }" alt="exemplo">
          <p class="name_product">${dados[index].name}</p>
          <a class="marca_product">${
            dados[index].brand
          }</a><a class="price_product" >R$ ${dados[index].price * 5.5}</a>
      </div>
      `;
    }
  }
}

function tipoProduct() {
  main.innerHTML = "";

  let select = document.getElementById("product_type").value;
  if (select == "") {
    getProducts()
  }
  let result = dados.filter(
    (item) => item.product_type.toLowerCase() == select.toLowerCase()
  );
  for (let index = 0; index < 10; index++) {
    main.innerHTML += `
    <div class="product">
        <img class="img_product" src="${
          result[index].image_link
        }" alt="exemplo">
        <p class="name_product">${result[index].name}</p>
        <a class="marca_product">${
          result[index].brand
        }</a><a class="price_product" >R$ ${result[index].price * 5.5}</a>
    </div>
    `;
  }
  console.log(result)


}

function marcaProduct() {
  main.innerHTML = "";

  let select = document.getElementById("marca").value;
  if (select == "") {
    getProducts()
  }
  let result = dados.filter(
    (item) => item.brand == select
  );
  for (let index = 0; index < 10; index++) {
    main.innerHTML += `
    <div class="product">
        <img class="img_product" src="${
          result[index].image_link
        }" alt="exemplo">
        <p class="name_product">${result[index].name}</p>
        <a class="marca_product">${
          result[index].brand
        }</a><a class="price_product" >R$ ${result[index].price * 5.5}</a>
    </div>
    `;
  }
  console.log(result)
}