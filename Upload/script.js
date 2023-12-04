class sujetos {
    constructor(id, nombre, tipo, domicilio, tiempo, culpabilidad, imagen, comentarios) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.domicilio = domicilio;
        this.tiempo = tiempo;
        this.culpabilidad = culpabilidad;
        this.imagen = imagen;
        this.comentarios = comentarios;

    }
}
const ArraySujetos = [];
if (!localStorage.getItem("1")) {
    const Choak = new sujetos("1", "Choak", "cargado", "LakeView", "2022", "delincuente", "img/Lider.jpg", "comentarios");
 
    const sujetoLocal = JSON.stringify(Choak);
    localStorage.setItem("1", sujetoLocal);
}

const storage = Object.keys(localStorage);

storage.forEach((key) => {
    const sujeto = JSON.parse(localStorage.getItem(key));
    ArraySujetos.push(sujeto);
})


var desaparecido = true;

function alternarDesaparicion() {
    var imagen = document.getElementById('miImagen');
    var formulario = document.getElementById('formulario');
    var listado = document.getElementById('listado');

    if (imagen.style.display === 'none') {
        formulario.style.display = 'none';
        imagen.style.display = 'block';
        listado.style.display = 'none';
    } else {
        formulario.style.display = 'none';
        imagen.style.display = 'none';
        listado.style.display = 'block';
    }

    desaparecido = !desaparecido;
}

function alternarFormulario() {
    var modificar = document.getElementById('modificar');
    var guardar = document.getElementById('guardar');
    
    modificar.style.display = 'none';
    guardar.style.display = 'block';

    document.querySelector('form').reset();
    var imagen = document.getElementById('miImagen');
    var formulario = document.getElementById('formulario');
    var listado = document.getElementById('listado');

    formulario.style.display = 'block';
    listado.style.display = 'none';
    imagen.style.display = 'none';


}
function mostrarSujetos() {
    const lista = document.getElementById("listado");

    lista.innerHTML = "";

    ArraySujetos.forEach(Sujeto => {
        const li = document.createElement("li");
        const img = document.createElement("img");

        // Asegúrate de que la ruta de la imagen sea correcta
        img.src = Sujeto.imagen;
        img.alt = Sujeto.nombre;
        img.width = 150;
        img.height = 150;
        img.addEventListener("click", () => {
            cargar(Sujeto);
        })
        img.onerror = () => {
            img.src = "img/error.jpg";
        }



        const p = document.createElement("p");
        p.textContent = Sujeto.nombre;

        li.appendChild(img);
        li.appendChild(p);

        lista.appendChild(li);


        if (Sujeto.tipo == "cargado") {
            img.className = "cargado";
        }

        if (Sujeto.tipo == "vivo") {
            img.className = "vivo";
        }

        if (Sujeto.culpabilidad == "candidato") {
            p.className = "candidato";
        }

        if (Sujeto.culpabilidad == "colaborador") {
            p.className = "colaborador";
        }

        if (Sujeto.culpabilidad == "delincuente") {
            p.className = "delincuente";
        }

        if (Sujeto.imagen == "") {
            img.src = "img/error.jpg";
            img.alt = "Error";
        }

    });
}

function cargar(Sujeto) {
    
    var listado = document.getElementById('listado');
    var formulario = document.getElementById('formulario');
    var guardar = document.getElementById('guardar');
    var modificar = document.getElementById('modificar');


    listado.style.display = 'none';
    formulario.style.display = 'block';
    guardar.style.display = 'none';
    modificar.style.display = 'block';
    

    const id = document.getElementById("id");
    const nombre = document.getElementById("nombre");
    const tipo = document.getElementById("tipo");
    const domicilio = document.getElementById("domicilio");
    const tiempo = document.getElementById("tiempo");
    const culpabilidad = document.getElementById("culpabilidad");
    const imagen = document.getElementById("urlImagen");
    const comentario = document.getElementById("comentarios");



    tipo.addEventListener("change", function () {

        if (tipo.value == "vivo") {
            tiempo.disabled = true;
        } else {
            tiempo.disabled = false;
        }
    });
    id.value = Sujeto.id;
    nombre.value = Sujeto.nombre;
    tipo.value = Sujeto.tipo;
    domicilio.value = Sujeto.domicilio;
    tiempo.value = Sujeto.tiempo;
    culpabilidad.value = Sujeto.culpabilidad;
    imagen.value = Sujeto.imagen;
    comentario.value = Sujeto.comentarios;

}
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const domicilio = document.getElementById("domicilio").value;
    const urlImagen = document.getElementById("urlImagen").value;
    const comentarios = document.getElementById("comentarios").value;

    if (!nombre || !tipo || !domicilio  || !urlImagen || !comentarios) {
        alert("Todos los campos son obligatorios");
        return false;
    }

    return true;
}

function modificarDatos() {
    if (validarFormulario()) {
        const id = document.getElementById("id").value;
        const nombre = document.getElementById("nombre").value;
        const tipo = document.getElementById("tipo").value;
        const domicilio = document.getElementById("domicilio").value;
        const tiempo = document.getElementById("tiempo").value;
        const culpabilidad = document.getElementById("culpabilidad").value;
        const imagen = document.getElementById("urlImagen").value;
        const comentarios = document.getElementById("comentarios").value;

        // Utiliza el nombre de la clase correcto (sujetos)
        const nuevoSujeto = new sujetos(id, nombre, tipo, domicilio, tiempo, culpabilidad, imagen, comentarios);

        const sujetoLocal = JSON.stringify(nuevoSujeto);

        localStorage.setItem(id, sujetoLocal);

        alert("Sujeto modificado");

        window.location.reload();
    }
}

function guardarDatos() {
    if (validarFormulario()) {
        const id = cogerId() + 1;
        const nombre = document.getElementById("nombre").value;
        const tipo = document.getElementById("tipo").value;
        const domicilio = document.getElementById("domicilio").value;
        const tiempo = document.getElementById("tiempo").value;
        const culpabilidad = document.getElementById("culpabilidad").value;
        const imagen = document.getElementById("urlImagen").value;
        const comentarios = document.getElementById("comentarios").value;

        // Utiliza el nombre de la clase correcto (sujetos)
        const nuevoSujeto = new sujetos(id, nombre, tipo, domicilio, tiempo, culpabilidad, imagen, comentarios);

        const sujetoLocal = JSON.stringify(nuevoSujeto);

        localStorage.setItem(id, sujetoLocal);

        alert("Sujeto guardado");

        window.location.reload();
    }
}

function cogerId() {
    const storage = Object.keys(localStorage);
    if (storage.length == 0 ){
        return 0;  
    }
    const id = Math.max(...storage.map(Number));

    return id;
}


// Llama a cargarListado al cargar la página o cuando sea necesario
document.addEventListener('DOMContentLoaded', function () {
    mostrarSujetos();
});


