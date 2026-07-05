

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach( (cadaPunto, i )=> {
    punto[i].addEventListener('click', ()=>{
    
        let posicion= i
        let operacion = posicion * -25

        grande.style.transform = `translateX(${ operacion}%)`

        punto.forEach( (cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')
    })
})

let titulo = document.getElementById('titulo')
let news = document.getElementById('news')

titulo.addEventListener("click", ()=> {

    news.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
} )



const tarjetas = [

    {
        image: "Captura de pantalla 2026-06-30 a las 13.35.50.png",
        titulo: "IPear",
        titulo2: "The smartphone that keeps up with your life.",
        texto: "Experience outstanding performance, stunning photography, and all-day battery life with the latest generation of Pear technology."
    },

    {
        image: "Captura de pantalla 2026-06-30 a las 13.36.09.png",
        titulo: "PearBook",
        titulo2: "Power meets portability.",
        texto: ">Designed for professionals and creators, the PearBook combines incredible speed, a brilliant display, and exceptional battery life in an ultra-thin design."
    },

    {
        image: "Captura de pantalla 2026-06-30 a las 13.36.19.png",
        titulo: "PearPad",
        titulo2: "Create without limits.",
        texto: "Whether you're drawing, studying, or working, the PearPad delivers a smooth and immersive experience with precision and versatility."
    },

    {
        image: "Captura de pantalla 2026-06-30 a las 13.36.30.png",
        titulo: "Pear Watch",
        titulo2: "Your day, on your wrist.",
        texto: "Track your health, stay connected, and manage your daily activities with intelligent features that adapt to your lifestyle."
    },

    {
        image: "Captura de pantalla 2026-06-30 a las 13.36.43.png",
        titulo: "PearPods",
        titulo2: "Pure sound. Zero distractions.",
        texto: "Enjoy immersive audio, crystal-clear calls, and seamless connectivity wherever you go."
    },

    {
        image: "Captura de pantalla 2026-06-30 a las 13.36.50.png",
        titulo: "Pear Home",
        titulo2: "Smart living starts here.",
        texto: "Control your home, enjoy entertainment, and connect every Pear device from one intelligent hub."
    },

    {
        image: "Captura de pantalla 2026-07-01 a las 11.50.15.png",
        titulo: "Pear Silicon",
        titulo2: "",
        texto: "Engineered for extraordinary speed and exceptional energy efficiency, Pear Silicon delivers outstanding performance for everything from everyday tasks to professional workloads."
    },

    {
        image: "Captura de pantalla 2026-07-01 a las 11.50.44.png",
        titulo: "Pear Intelligence",
        titulo2: "",
        texto: "Intelligent features powered by advanced AI help you create faster, communicate smarter, and enjoy a more personalized experience across every Pear device."
    },

    {
        image: "Captura de pantalla 2026-07-01 a las 11.50.56.png",
        titulo: "Pear Cloud",
        titulo2: "",
        texto: "Securely store, access, and sync your files, photos, and documents across all your devices with fast, reliable cloud technology."
    },

    {
        image: "Captura de pantalla 2026-07-01 a las 11.51.18.png",
        titulo: "Privacy First",
        titulo2: "",
        texto: "Your data belongs to you. Every Pear product is built with advanced security features and privacy protections designed to keep your information safe."
    },

    {
        image: "Captura de pantalla 2026-07-04 a las 16.09.41.png",
        titulo: "Recycled Materials",
        titulo2: "",
        texto: "We maximize the use of recycled aluminum, rare earth elements, and responsibly sourced materials across our devices."
    },

    {
        image: "Captura de pantalla 2026-07-04 a las 16.10.14.png",
        titulo: "Renewable Energy",
        titulo2: "",
        texto: "Our facilities are powered by renewable energy, reducing emissions while supporting cleaner manufacturing."
    },

    {
        image: "Captura de pantalla 2026-07-04 a las 16.10.21.png",
        titulo: "Carbon Neutral",
        titulo2: "",
        texto: "Pear is committed to achieving carbon neutrality across our products and operations by 2035."
    },
]

const productos = document.querySelectorAll(".producto");

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const modalTitulo = document.getElementById("modal-titulo");

const modalTitulo2 = document.getElementById("modal-titulo2");

const modalTexto = document.getElementById("modal-texto");

const cerrar = document.getElementById("cerrar-modal");

productos.forEach((producto)=>{

    producto.addEventListener("click", ()=>{

        let id = producto.dataset.id;

        modalImg.src = tarjetas[id].image;

        modalTitulo.textContent = tarjetas[id].titulo;

        modalTitulo2.textContent = tarjetas[id].titulo2;

        modalTexto.textContent = tarjetas[id].texto;

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

cerrar.addEventListener("click", () => {

    modal.style.display = "none";

    document.body.style.overflow = "auto";

});






function updateTime(){

    let currentTime = new Date().toLocaleString();
    let timeText = document.querySelector("#time")

    timeText.innerHTML = currentTime
}

setInterval(updateTime, 1000);
