let productlist = ["Fries","Burger","Spaghetti"]
let pricelist = [1,2,3]
let containerEl = document.getElementById("container-el")
let listEl = document.getElementById("list-el")
let selectedProductEl = document.getElementById("selected-product")

let listItems = ""

for(let i=0; i<productlist.length;i++){
    listItems += `

     <option value=${productlist[i]}> ${productlist[i]}</option>
    `
}

containerEl.innerHTML = listItems

function updateProduct(){
    var select = document.getElementById("container-el");
    var option = select.options[select.selectedIndex];

    selectedProductEl.value = option.value;
    selectedProductEl.value = option.text;
}
updateProduct()

function submit(){
    listEl.innerHTML += `
    
    <li>${selectedProductEl.value}</li> `
    
}

