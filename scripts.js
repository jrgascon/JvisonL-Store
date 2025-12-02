const originalElements = {

    all: Array.from(document.getElementsByClassName("product")),
    pc: Array.from(document.getElementsByClassName("pc-elem")),
    phone: Array.from(document.getElementsByClassName("phone-elem")),
    other: Array.from(document.getElementsByClassName("other")),

}

const allBtn = document.getElementById("btn-all")
const pcBtn = document.getElementById("btn-pc")
const phoneBtn = document.getElementById("btn-phone")
const otherBtn = document.getElementById("btn-other")
const btnContainer = document.getElementById("btn-products")

const products = document.getElementById("product-list")


function modificarLista(typeElem){

    switch(typeElem) {
        case "btn-pc":
            return originalElements.pc;

        case "btn-phone":
            return originalElements.phone;

        case "btn-other":
            return originalElements.other;

        default:
            return originalElements.all;
    }

}

function actualizarLista(list){

    products.innerHTML = ''

    for (const element of list) {
        products.appendChild(element.cloneNode(true))
    }

}

for (btn of btnContainer.children) {

    btn.addEventListener('click', (e) =>{        
        const list = modificarLista(e.target.id)
        actualizarLista(list)
    })

}


