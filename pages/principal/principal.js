import Modal from "../../assets/js/activarModales.js";
import CarroDeCompras from "../../assets/js/carro-compras.js";
import { itemsStockGeneral, itemsStockNuevo } from "../../assets/js/vistaPrincipal.js";

const d = document;
let carroDecompras = new CarroDeCompras;
let modal = new Modal;

d.addEventListener("DOMContentLoaded", e=>{
    // localStorage.setItem('itemsListCarroDeCompras', JSON.stringify())

    modal.modalCarroCompras();
    modal.modalInicioSesion();
    carroDecompras.stockInLS()
    itemsStockNuevo();
    itemsStockGeneral();
    carroDecompras.actualizarCarroDeCompras();
    carroDecompras.botonAñadir();
    carroDecompras.numberObjectLS();
    // modal.abrirPaginaPorItem()

    document.addEventListener("click", (e)=>{
        // e.preventDefault()
        console.log(e)
        carroDecompras.botonEliminar(e);
    })

    document.addEventListener("change", e=>{
        console.log(e)
        carroDecompras.actualizarCantidadCarroDeCompras(e)
        
    })
    
})