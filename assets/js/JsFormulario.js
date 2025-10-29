window.addEventListener("DOMContentLoaded", function () {
    // const VariableJS = document.getElementById("IdControl");
    // VariableJS.addEventListener("click",function () {
    // let lv_mensaje_3 = "Ese mensaje se muestra al presionar el boton: Presioname 3 - Script externo - ejecutado por el idel boton"
    // alert(lv_mensaje_3);
    // });
    const nombreInput = document.getElementById("nombre")
    nombreInput.addEventListener("click", function () {
        let mensaje = "test primer evento"
        alert(mensaje)
    })

    const paisInput = document.getElementById("pais")
    paisInput.addEventListener("click", function () {
        let mensaje = "test evento pais";
        paisInput.style.border = "3px solid blue";
        paisInput.style.borderRadius = "5px";
    })

    const emailInput = document.getElementById("correo")
    emailInput.addEventListener("click", function () {
        let mensaje = "test evento email";
        emailInput.style.backgroundColor = "blue";
    })
})




