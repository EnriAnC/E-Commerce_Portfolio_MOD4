import Modal from "../../assets/js/activarModales.js"
import CarroDeCompras from "../../assets/js/carro-compras.js";
import { agregarItemACarro, paginaPorItem } from "../../assets/js/paginaItems.js"

const   d = document;
const modal = new Modal;
const carroDecompras = new CarroDeCompras;

d.addEventListener("DOMContentLoaded", ()=>{
    paginaPorItem()
    modal.modalInicioSesion()
    modal.modalCarroCompras()
    
    carroDecompras.numberObjectLS()
    carroDecompras.actualizarCarroDeCompras();

    document.addEventListener("click", (e)=>{
        carroDecompras.botonEliminar(e);
        carroDecompras.actualizarCantidadCarroDeCompras(e)
        agregarItemACarro(e)
    })
})
