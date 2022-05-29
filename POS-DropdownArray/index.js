let productlist = ["Fries","Burger","Spaghetti"]
let pricelist = [1,2,3]
const containerEl = document.getElementById("container-el")

let listItems = ""

for(let i=0; i<productlist.length;i++){
    listItems += `

     <option value=${productlist[i]}> ${productlist[i]}</option>
    `
}
containerEl.innerHTML = listItems