function crearNavBar() {
    var nav = document.getElementById("nav_bar");

    nav.innerHTML = '<li><a href="index.html">Inicio</a></li>   <li><a href="galeria.html">Fotos</a></li>   <li><a href="presupuesto.html">Presupuesto</a></li>   <li><a href="contacto.html">Contacto</a></li>   <li><a href="cv.html">Trabajá con nosotros</a></li>';
}

function detenerEvento(e) {
    e.preventDefault();
}

function validarTelefono(e) {

    var tecla = e.keyCode || e.which;

    if (tecla >= 48 && tecla <= 57 || (String.fromCharCode(tecla) == "+")) {
        return true;
    } else {
        detenerEvento(e);
    }
}

function validarCorreo() {

    var correo = document.getElementById("fmail").value;

    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!expr.test(correo)) {
        alert("Error: La dirección de correo " + correo + " es incorrecta.");

        return false;
    }
}

function mostrarGaleria(n) {
    var imagen = document.getElementById("imgGaleria");

    imagen.src = "../imagenes/galeria" + n + ".jpg";
}

function cargarMiniaturas() {
    var fragmento1 = '<a href="#imgGaleria"><img id="miniatura" onclick="mostrarGaleria(',
        fragmento2 = ');" src="../imagenes/galeria',
        fragmento3 = '.jpg" /> </a>',
        codigoHML = "",
        i = 0,
        contenedor = document.getElementById("galeria_miniaturas");


    for (i = 1; i < 14; i = i + 1) {
        codigoHML = codigoHML + fragmento1 + i + fragmento2 + i + fragmento3;
    }

    contenedor.innerHTML = codigoHML;
}

function validarDecimal(e) {

    var tecla = e.keyCode || e.which;

    if (tecla >= 48 && tecla <= 57 || (String.fromCharCode(tecla) == ".")) {
        return true;
    } else {
        detenerEvento(e);
    }
}

function borrarResultado() {
    var res = document.getElementById("fresultado");
    res.style.display = "";
}

function calcularPresupuesto() {
    var res = document.getElementById("fresultado"),
        dis = parseFloat(document.getElementById("fdistancia").value),
        pes = parseFloat(document.getElementById("fkilos").value),
        tam = parseFloat(document.getElementById("fmetros").value),
        vd = parseFloat(document.getElementById("fvalorDeclarado").value);


    if (isNaN(dis) || isNaN(pes) || isNaN(tam) || isNaN(vd)) {
        alert("Complete todos los campos.");
        return false;
    }

    var valor = (dis * 0.01) + (pes * 0.01) + (tam * 15) + (vd * 0.002);

    res.style.display = "block";
    res.textContent = "El valor del envío sería de: $ " + valor.toFixed(2);

}
