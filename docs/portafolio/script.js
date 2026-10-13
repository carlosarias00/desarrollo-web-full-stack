const elementos = document.querySelectorAll(".aparecer");
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        } else {
            entrada.target.classList.remove("visible");
        }
    });
});
elementos.forEach((elemento) => {
    observador.observe(elemento);
});