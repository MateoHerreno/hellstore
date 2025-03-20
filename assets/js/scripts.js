import { botonWhatsApp } from "../../includes/btnwpp.js"
import { header } from "../../includes/header.js"
import { social } from "../../includes/socials.js"
import { navbar } from "../../includes/nav.js";
import { footer } from "../../includes/footer.js";

//variables a reemplazar de el json
const nombreSitio = "Mimina Store"
const telefono = "3126062235"; 
const email = "info@mimina.com"
const mensajeflotante = "Hola, quiero más información sobre sus pijamas";
const urlfacebook = "https://www.facebook.com/mateo.herren"
const urlinstagram = "https://www.instagram.com/"

//funcion de url de watsaap
function urlWatsapp(telefono, mensaje) {
    let url = `https://wa.me/${telefono}`;
    if (mensaje) {
        url += `?text=${encodeURIComponent(mensaje)}`;
    }
    return url;
}

// carga de doom e inserciones
document.addEventListener("DOMContentLoaded", () => {
    // Insertar headers
    function headerinsert(etiquetaid,ruta,titulohtml){
        if (titulohtml && ruta){
            titulohtml  = `${nombreSitio} || ${titulohtml}`
        }else{
            titulohtml = ""
            ruta = ""
        }
        const headerins = document.getElementById(`${etiquetaid}`)
        if (headerins){
            headerins.innerHTML = header(`${titulohtml}`,`${ruta}`)
        }
    }
    headerinsert("headerIndex")
    headerinsert("headertienda","../","Shop")
    headerinsert("headerproducto","../","producto")
    
    
    // insertar navbar
    const barranav = document.getElementById("navbar")
    if (barranav) {
        barranav.innerHTML = navbar()
    } else {
        console.error("ID 'navbar'.")
    }
    
    // Insertar top social icons en index
    const icons = document.getElementById("social");
    if (icons) {
        var whatsappURLsocial = urlWatsapp(telefono);
        icons.innerHTML = social(urlfacebook, urlinstagram, whatsappURLsocial);
    } else {
        console.error("ID 'social'.");
    };

    //insercion footer
    const foot = document.getElementById("footer")
    if (foot) {
        foot.innerHTML = footer(telefono, email)
    } else { 
        console.error("ID 'footer'.")
    }

    // insercion del botón de WhatsApp
    const btnwpp = document.getElementById("botonwats");
    if (btnwpp) {
        var whatsappURLBtn = urlWatsapp(telefono, mensajeflotante);
        btnwpp.innerHTML = botonWhatsApp(whatsappURLBtn);
    } else {
        console.error("ID 'botonwats'.");
    };

    //insercion nombre en index
    document.getElementById("nombre").innerHTML = nombreSitio
});