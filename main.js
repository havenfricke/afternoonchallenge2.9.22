const iceCream = [
  { id: 1, name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 },
  { id: 2, name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 },
  { id: 3, name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }
]


const vessels = [
  { id: 4, name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 },
  { id: 5, name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }
]

const toppings = [
  { id: 6, name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 },
  { id: 7, name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }
]

let cart = []

let menu = [...toppings, ...vessels, ...iceCream]

let total = 0


function drawIcecream() {
  let template = ''
  for (let i = 0; i < iceCream.length; i++) {
    const item = iceCream[i];
    template += `
    <div class="col-6 bg-light p-0 selectable" onclick="buyIceCream(${item.id})">
    <img class="img-fluid" src="${item.image}" alt="broken image">
    <div class="d-flex img-fix justify-content-between p-1">
      <h6>${item.name}</h6>
      <p>$${item.price}</p>
    </div>
  </div>`
  }
  console.log(template)
  document.getElementById('menu1').innerHTML = template
}


function drawVessels() {
  let template = ''
  for (let i = 0; i < vessels.length; i++) {
    const item = vessels[i];
    template += `
    <div class="col-6 bg-light p-0 selectable" onclick="buyIceCream(${item.id})">
    <img class="img-fluid" src="${item.image}" alt="broken image">
    <div class="d-flex img-fix justify-content-between p-1">
      <h6>${item.name}</h6>
      <p>$${item.price}</p>
    </div>
  </div>`
  }
  console.log(template)
  document.getElementById('menu2').innerHTML = template
}



function drawTopping() {
  let template = ''
  for (let i = 0; i < toppings.length; i++) {
    const item = toppings[i];
    template += `
    <div class="col-6 bg-light p-0 selectable" onclick="buyIceCream(${item.id})">
    <img class="img-fluid" src="${item.image}" alt="broken image">
    <div class="d-flex img-fix justify-content-between p-1">
      <h6>${item.name}</h6>
      <p>$${item.price}</p>
    </div>
  </div>`
  }
  console.log(template)
  document.getElementById('menu3').innerHTML = template
}


drawVessels()
drawIcecream()
drawTopping()

function drawCart() {
  let template = ''
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    template += `
    <div class="col-12">
    <div class="d-flex justify-content-between p-1">
    <h6 class="text-dark">1 ${item.name}</h6>
    <b>$${item.price}</b>
    </div>
    </div>`
  }
  document.getElementById('cart').innerHTML = template
  document.getElementById('total').innerText = total.toFixed(2)
}


function buyIceCream(iceId) {
  let itemAdd = menu.find(banana => banana.id == iceId)
  cart.push(itemAdd)
  total += itemAdd.price

  drawCart()
}

function checkout() {
  if (cart.length)
    cart = []
  total = 0
  drawCart()
}

drawCart()







