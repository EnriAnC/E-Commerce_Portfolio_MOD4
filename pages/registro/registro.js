import Modal from "../../assets/js/activarModales.js";
import CarroDeCompras from "../../assets/js/carro-compras.js";
import { formRegistro, contactFormValidations } from "../../assets/js/formRegistro.js";
const d=document;
d.addEventListener('DOMContentLoaded', ()=>{
    formRegistro(contactFormValidations)
    const modal = new Modal
    const carroDecompras = new CarroDeCompras

    modal.modalCarroCompras()
    modal.modalInicioSesion()

    carroDecompras.numberObjectLS()
    carroDecompras.actualizarCarroDeCompras();

    document.addEventListener("click", (e)=>{
        carroDecompras.botonEliminar(e);
    })

    document.addEventListener("change", e=>{
        carroDecompras.actualizarCantidadCarroDeCompras(e)
    })
})

