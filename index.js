

let burgerTotal = document.getElementById("burger-total")
let friesTotal = document.getElementById("fries-total")
let friedChickenTotal = document.getElementById("friedchicken-total")
let grandTotal = document.getElementById("grand-total")
let cashEl = document.getElementById("cash")
let changeEl = document.getElementById("change")

let burgerPrice = document.getElementById("burger-price")
let friesPrice = document.getElementById("fries-price")
let friedChickenPrice = document.getElementById("friedchicken-price")

let burgerQty = document.getElementById("burger-qty")
let friesQty= document.getElementById("fries-qty")
let friedChickenQty= document.getElementById("friedchicken-qty")

let burgerT = 0
let friesT = 0
let friedChickenT = 0
let grandTotalT = 0
let changeT = 0


function solveBurgerTotal(){
    // console.log(burgerPrice.textContent)
    // console.log(burgerQty.value)
    burgerT = burgerPrice.textContent * burgerQty.value
    burgerTotal.textContent = burgerT
    console.log(burgerT)
    solveGrandTotal()
}

function solveFriesTotal(){
    friesT = friesPrice.textContent * friesQty.value
    friesTotal.textContent = friesT
    console.log(friesT)
    solveGrandTotal()
}

function solveFriedChickenTotal(){
    friedChickenT = friedChickenPrice.textContent * friedChickenQty.value
    friedChickenTotal.textContent = friedChickenT
    console.log(friedChickenT)
    solveGrandTotal()
}

function solveGrandTotal(){
    grandTotalT = burgerT + friesT + friedChickenT
    grandTotal.textContent = grandTotalT
    console.log(grandTotalT)
}



function solveChange(){
    console.log("cash:"+cashEl.value)
    console.log("total:"+grandTotalT)
    changeT = cashEl - grandTotalT
    console.log(changeT)
    changeEl.textContent = changeT
}


// console.log(burgerT + friesT + friedChickenT)