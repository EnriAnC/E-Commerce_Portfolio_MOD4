import Modal from "../../assets/js/activarModales.js";
import CarroDeCompras from "../../assets/js/carro-compras.js";

const d = document;

d.addEventListener('DOMContentLoaded',e=>{
    const carroDeCompras = new CarroDeCompras;
    const modal = new Modal;
    modal.modalInicioSesion();
    carroDeCompras.actualizarCarroDeCompras();
    d.addEventListener('change', e=>{
        carroDeCompras.actualizarCantidadCarroDeCompras(e)
    })
    
})