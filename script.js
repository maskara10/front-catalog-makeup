
let dados;
var contadorMostrarMais = 10;
var main = document.querySelector(".main");

fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
  .then((response) => response.json())
  .then((json) => {
    dados = json;
    console.log(dados);
    for (let index = 0; index < contadorMostrarMais; index++) {
      main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${dados[index].image_link}" alt="exemplo">
          <p class="name_product">${dados[index].name}</p>
          <a class="marca_product">${dados[index].brand}</a><a class="price_product" >R$ ${dados[index].price * 5.5}</a>
      </div>
      `;
    }
  });

function buscaNome() {
  main.innerHTML = ""
  var inputText = document.querySelector(".buscar_nome").value
  var buscar_nome = dados.filter((item) => item.name.toLowerCase() == inputText.toLowerCase())
  console.log(buscar_nome)
  for (let index = 0; index < buscar_nome.length; index++) {
    main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${buscar_nome[index].image_link}" alt="exemplo">
          <p class="name_product">${buscar_nome[index].name}</p>
          <a class="marca_product">${buscar_nome[index].brand}</a><a class="price_product" >R$ ${buscar_nome[index].price * 5.5}</a>
      </div>
      `;
  }
}

var contadorMostarMenos = 10
function mostrarMais() {

  contadorMostrarMais = contadorMostrarMais + 10
  for (contadorMostarMenos; contadorMostarMenos < contadorMostrarMais; contadorMostarMenos++) {
    main.innerHTML += `
    <div class="product">
        <img class="img_product" src="${dados[contadorMostarMenos].image_link}" alt="exemplo">
        <p class="name_product">${dados[contadorMostarMenos].name}</p>
        <a class="marca_product">${dados[contadorMostarMenos].brand}</a><a class="price_product" >R$ ${dados[contadorMostarMenos].price * 5.5}</a>
    </div>
    `;
  }
}

function selectItens() {
  var select = document.getElementById("rating")
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
    main.innerHTML = ""
    for (let index = 0; index < contadorMostrarMais; index++) {
      main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${dados[index].image_link}" alt="exemplo">
          <p class="name_product">${dados[index].name}</p>
          <a class="marca_product">${dados[index].brand}</a><a class="price_product" >R$ ${dados[index].price * 5.5}</a>
      </div>
      `;
    }
  } else if(select.value == "maiores-precos") {

    dados.sort((i1, i2) => {
      if (i1.price > i2.price) {
        return -1;
      } else if (i1.price < i2.price) {
        return 1;
      } else {
        return 0;
      }
    });
    main.innerHTML = ""
    for (let index = 0; index < contadorMostrarMais; index++) {
      main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${dados[index].image_link}" alt="exemplo">
          <p class="name_product">${dados[index].name}</p>
          <a class="marca_product">${dados[index].brand}</a><a class="price_product" >R$ ${dados[index].price * 5.5}</a>
      </div>
      `;
    }
  }
}

