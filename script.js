// // URL da API que você deseja consumir
// const apiUrl = "https://makeup-api.herokuapp.com/api/v1/products.json";

// // Fazer a requisição usando o fetch
// fetch(apiUrl)
//   .then((response) => {
//     // Verificar se a resposta da API está OK
//     if (!response.ok) {
//       throw new Error(
//         `Erro ao fazer a requisição. Código de status: ${response.status}`
//       );
//     }
//     // Converter a resposta para JSON
//     return response.json();
//   })
//   .then((data) => {
//     //var listarProdutos = document.querySelector(".body")

//     // Manipular os dados retornados pela API
//     console.log(data);
//     var marcas = data.filter((item) => item.category == "pencil");
//     //var tipo = marcas.filter((item) => item.product_type == "eyeliner")
//     //console.log(marcas)
//     //console.log(tipo)
//     //var preco = tipo[2].price
//     //console.log(preco * 5.5)
//     marcas.sort((i1, i2) => {
//       if (i1.name > i2.name) {
//         return -1;
//       } else if (i1.name < i2.name) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//     console.log(data[0].name);
//     //console.log(data)
//     //console.log(data[0].price * 5.5)
//   })
//   .catch((error) => {
//     // Lidar com erros
//     console.error(error);
//   });

let dados;

fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
  .then((response) => response.json())
  .then((json) => {
    dados = json;
    console.log(dados);
  });

var main = document.querySelector(".main");
function listarP() {
  for (let index = 0; index < 20; index++) {
    main.innerHTML += `
      <div class="product">
          <img class="img_product" src="${dados[index].image_link}" alt="exemplo">
          <p class="name_product">${dados[index].name}</p>
          <a class="marca_product">${dados[index].brand}</a><a class="price_product" >R$ ${dados[index].price * 5.5}</a>
      </div>
      `;
  }
}
