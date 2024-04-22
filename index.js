/////////////////////// first app with import db.json

 import file from "./db.json" with {type: "json"}

 const serchInput = document.querySelector("#search");
const productsDom = document.querySelector(".products-center");

const btns = document.querySelectorAll(".btn");

 let allProducts= file;
 let items = allProducts.items;
 let filters = "";

 document.addEventListener("DOMContentLoaded",()=>{
     render()
 });

 function render() {
     const filteredProducts=  items.filter((i)=>{
         return i.title.includes(filters)
        }
    );
        
        productsDom.innerHTML="";

    return filteredProducts.forEach((item,index)=>{
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = ` <div class="img-container">
        <img src=${item.image} alt="p-${index}">
    </div>
    <div class="product-desc">
        <p class="product-price">${item.price} $</p>
        <p class="product-title">${item.title}</p>
    </div>`;
    productsDom.appendChild(productDiv);
     });
 };

 serchInput.addEventListener("input",(e)=>{
    filters = e.target.value;
        render();
 });

 btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const filter = e.target.dataset.filter;
        filters = filter;
        render(items,filters)
    });
 });

/////////////////////  second app  with  fetch

//// http://127.0.0.1:5500/db.json

// const serchInput = document.querySelector("#search");
// const productsDom = document.querySelector(".products-center");
// const btns = document.querySelectorAll(".btn");

// let items = [];
// let filters = {
//   serchItems: "",
// };

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("http://127.0.0.1:5500/db.json")
//     .then((res) => res.json())
//     .then((res) => {
//       items = res.items;
//       render(items, filters);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// function render(pro, fil) {
//   const filteredProducts = pro.filter((p) => {
//     return p.title.toLowerCase().includes(fil.serchItems.toLowerCase());
//   });

//   productsDom.innerHTML="";


//   filteredProducts.forEach((item, index) => {
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("product");
//     productDiv.innerHTML = `
//     <div class="img-container">
//     <img src=${item.image} alt="p-${index}">
//     </div>
//         <div class="product-desc">
//             <p class="product-price">${item.price} $</p>
//             <p class="product-title">${item.title}</p>
//         </div>`;
//         productsDom.appendChild(productDiv)
//   });
// }

// serchInput.addEventListener("input", (e) => {
//   filters.serchItems = e.target.value;
//   render(items, filters);
// });

// btns.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         const filter = e.target.dataset.filter;
//         filters.serchItems = filter;
//         render(items,filters);
//     });
// });
