

// Header

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll",()=>{
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }
    else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }

    ubicacionPrincipal = desplazamientoActual;
});

// Menú

let enlacesHeader = document.querySelector(".enlaces-header");
let semaforo = true;

document.querySelectorAll(".hamburguesa")[0].addEventListener("click", ()=>{
    enlacesHeader.classList.toggle("menu-dos");

    if (semaforo) {
        document.querySelectorAll(".hamburguesa")[0].style.color = "#fff";
        semaforo = false;
    }
    else{
        document.querySelectorAll(".hamburguesa")[0].style.color = "#1fde82";
        semaforo = true;
    }
});

