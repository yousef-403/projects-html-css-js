// navbar section ---

const bar = document.querySelector(".bar");
const nav = document.querySelector(".list");
const close =document.querySelector(".close")
   
bar.addEventListener("click",()=>{
      nav.classList.add("active")
    })
close.addEventListener("click",()=>{
  nav.classList.remove("active")
})    


// shopping cart section 

const cart = document.querySelector(".shoppingCart")
const cartIcon = document.querySelector(".cartIcon")
const closebtn = document.querySelector(" .shoppingCart .closebtn")

cartIcon.addEventListener("click" ,()=>{
  cart.classList.add("activate")
})
closebtn.addEventListener("click",()=>{
  cart.classList.remove("activate")
})

// ---------------------------------------

// show products 

const container = document.querySelector(".pro-container")
const cartContainer = document.querySelector(".cartContainer")


let my__data ;

let show = async ()=>{
  let res = await fetch("https://api.escuelajs.co/api/v1/products")
  .then((res)=> res.json())
let products = res.products;
  // console.log(res);
  my__data = res
  display(res);
}


window.addEventListener("DOMContentLoaded",()=>{
  show()
})

function display (data){
  tem = "";
  for(let i=0;i<data.length;i++){
    tem +=`<div class="pro">
    <img src="assits/img/products/f1.jpg" alt="">
    <div class="des">
        <span>${data[i].category.name}</span>
        <h5>${data[i].title}</h5>
        <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <h4>${data[i].price}</h4>
    </div>
    <i onClick = "sendToCart(${i})" class="fas fa-cart-shopping cart"></i>
</div>`
  }
container.innerHTML = tem;
}

// ---------------------------------------------

// add to cart 

let counter = document.querySelector(".conter")
let arr = [];

 function sendToCart (index){
  
arr.push(my__data[index])
console.log(arr);

  cartData(arr)

  counter.textContent = arr.length
  check()
  total()
}


function cartData(arrr){
  element = "";
  for(let l=0;l<arrr.length;l++){
    element +=`<div class="items">
    <p>${arrr[l].title}</p>
    </div>`
  }
cartContainer.innerHTML = element;
}

function check(){
  let checkOut = document.querySelector(".checkOut")

  checkOut.addEventListener(("click"),()=>{
    arr= [];
    cartContainer.innerHTML = `<div class="items">
    <p>buy completed</p>
    </div>`
    counter.textContent = 0;
  })

}

function total(){

}





