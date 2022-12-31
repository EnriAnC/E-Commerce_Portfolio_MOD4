import myJson from './items.json' assert {type: 'json'};

export function itemsStockNuevo(){
    const $carruselInventario = document.getElementsByClassName("carrusel-inventario")
    console.log($carruselInventario)
    if ($carruselInventario.length != 0){
        const itemsList= myJson
        const arrayItemsList = Object.values(itemsList)

        let fragment = document.createDocumentFragment()
        let divRow1 = document.createElement('div')
        let divRow2 = document.createElement('div')
        divRow1.className = 'itemsNuevos'
        divRow2.className = 'itemsNuevos'

        arrayItemsList.forEach((item, index)=>{
            // console.log(item, index)
            if(index < 4){
                divRow1.innerHTML += `
                <a id="${item.id}" productNumber = ${+index + 1} href="./pages/productos/productos.html" class="card">
                    <img src="${item.img}" alt="">
                    <p class="detallesItem">${item.nombre}<br>$${item.precio}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <use xlink:href="#add-circle">
                    </svg>
                    <p class="sumarUno">+1</p>
                </a>
                `
            }
        })
        divRow1.innerHTML += divRow1.innerHTML + divRow1.innerHTML
        fragment.appendChild(divRow1)

        arrayItemsList.forEach((item, index)=>{
            // console.log(item, index)
            if(index < 8 && index >= 4){
                divRow2.innerHTML += `
                <a id="${item.id}" productNumber = ${+index + 1} href="./pages/productos/productos.html" class="card">
                    <img src="${item.img}" alt="">
                    <p class="detallesItem">${item.nombre}<br>$${item.precio}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <use xlink:href="#add-circle">
                    </svg>
                    <p class="sumarUno">+1</p>
                </a>
                `
            }
        })
        divRow2.innerHTML += divRow2.innerHTML + divRow2.innerHTML
        fragment.appendChild(divRow2)

        $carruselInventario[0].appendChild(fragment)
    }    
}

export function itemsStockGeneral(){
    const $flexInventario = document.getElementsByClassName("flex-inventario")
    console.log($flexInventario)
    if ($flexInventario.length != 0){
        const itemsList= myJson
        const arrayItemsList = Object.values(itemsList)

        let fragment = document.createDocumentFragment()
        let divRow1 = document.createElement('div')
        let divRow2 = document.createElement('div')
        divRow1.className = 'container-inventario'
        divRow2.className = 'container-inventario'
        divRow1.id = "inventario1"
        divRow2.id = "inventario2"

        arrayItemsList.forEach((item, index)=>{
            // console.log(item, index)
            if(index < 3){
                divRow1.innerHTML += `
                <a id="${item.id}" productNumber = ${+index + 1} href="./pages/productos/productos.html" class="card">
                    <img src="${item.img}" alt="">
                    <p class="detallesItem">${item.nombre}<br>$${item.precio}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <use xlink:href="#add-circle">
                    </svg>
                    <p class="sumarUno">+1</p>
                </a>
                `
            }
        })
        divRow1.innerHTML += divRow1.innerHTML + divRow1.innerHTML
        fragment.appendChild(divRow1)

        arrayItemsList.forEach((item, index)=>{
            // console.log(item, index)
            if(index < 10 && index >= 5){
                divRow2.innerHTML += `
                <a id="${item.id}" productNumber = ${+index + 1} href="./pages/productos/productos.html" class="card">
                    <img src="${item.img}" alt="">
                    <p class="detallesItem">${item.nombre}<br>$${item.precio}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <use xlink:href="#add-circle">
                    </svg>
                    <p class="sumarUno">+1</p>
                </a>
                `
            }
        })
        divRow2.innerHTML += divRow2.innerHTML + divRow2.innerHTML
        fragment.appendChild(divRow2)

        $flexInventario[0].appendChild(fragment)
    }        
}