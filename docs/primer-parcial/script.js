
const PUBLIC_KEY = "Lgx2XlMYvQ6sRQ4AS";
const SERVICE_ID = "service_9tqgzdy";
const TEMPLATE_ID = "template_7tcou5s";

const formulario = document.getElementById("formularioCorreo");
const boton = document.getElementById("botonEnviar");
const notificacion = document.getElementById("notificacion");

function mostrarMensaje(texto, tipo) {
    notificacion.textContent = texto;
    notificacion.className = tipo;
    notificacion.hidden = false;
}

emailjs.init({
    publicKey: PUBLIC_KEY
});

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !asunto || !mensaje) {
        mostrarMensaje("Completa todos los campos.", "error");
        return;
    }

    boton.disabled = true;
    boton.textContent = "Enviando...";
    notificacion.hidden = true;

    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_name: nombre,
            to_email: correo,
            subject: asunto,
            message: mensaje
        });

        mostrarMensaje(
            "¡Correo enviado correctamente!",
            "exito"
        );

        formulario.reset();
    } catch (error) {
        console.error("Error de EmailJS:", error);

        mostrarMensaje(
            "No se pudo enviar el correo. Revisa la configuración.",
            "error"
        );
    } finally {
        boton.disabled = false;
        boton.textContent = "Enviar correo";
    }
});
