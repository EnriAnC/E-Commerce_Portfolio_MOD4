const d=document;
export function formRegistro(){
    const $main = d.getElementsByClassName('main');

    $main[0].innerHTML = `
    <form class="contact-form" method="POST">
        <legend>Registro</legend>
        
        <label for="name">Nombre de usuario:</label>
        <input type="text" required name="usuario" 
            placeholder="Escribe tu nombre" 
            title="El Nombre solo acepta letras sin espacios"
            pattern="^([A-Za-z0-9]+|-[A-Za-z0-9]+|_[A-Za-z0-9]+){1,50}$">

        <label for="correo">Correo</label>
        <input type="email" required name="correo" 
            placeholder="Escribe tu email" 
            title="Email incorrecto"
            pattern="^[A-Za-z0-9]+(\.[A-Za-z0-9]+|-[A-Za-z0-9]+|_[A-Za-z0-9]+)*@[A-Za-z0-9-]+[\.]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{1,15})$">
        
        <label for="passwd">Contraseña:</label>
        <input type="password" required name="passwd" 
            placeholder="Contraseña" 
            title="La contraseña es requerida">

        <label for="fecha">Fecha de nacimiento</label>
        <input name="fecha" type="date"
            placeholder="Escribe tus comentarios"
            required
            title="Tu comentario no debe exceder los 255 carácteres"
            data-pattern="^(\n|.){1,255}$">
        
        <input type="submit" value="Registrarse">

        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
    </form>
</section>
    `
    contactFormValidations()
}

export function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");
    console.log($inputs)

    $inputs.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    });

    d.addEventListener("keyup", e => {
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern;
            //console.log($input, pattern)
            if (pattern && $input.value != ""){
                console.log("input con Patron");
                let regex = new RegExp(pattern)
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }

            if (!pattern){
                console.log("input sin Patron")
                return $input.value === ""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    })
    d.addEventListener("submit", e=>{
        e.preventDefault();
        alert("Enviando formulario");

        const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        setTimeout(()=>{
            $loader.classList.add("none")
            $response.classList.remove("none")
            $form.reset()

            setTimeout(()=> $response.classList.add("none"),3000)
            
        }, 3000)
    })
}