import { btnWhApp,urlWhatsapp } from "../../includes/whatsapp.js"
import { obtainProducts,obtaincredential }from "../js/conection.js";
import { head } from "../../includes/head.js"
import { social } from "../../includes/socials.js"
import { navbar } from "../../includes/nav.js";
import { footer } from "../../includes/footer.js";


// carga de doom inserciones 
document.addEventListener("DOMContentLoaded", async () => {
    //variables que trae el json
    const credential = await obtaincredential();
    var webName = credential.nombreweb|| "Mimina Static"
    var cel = credential.numero || "#"
    var email = credential.email || "#"
    var urlfacebook = credential.faceurl || "#"
    var urlinstagram = credential.instaurl || "#"
    var infoMessage = "Hola, quiero más información sobre sus pijamas";
    
    //de componentes html ---------------------------------------------------------------------->
    // Insertar headers
    function headInsert(id, route, title) {
        if (title && route) {
            title = `${webName} || ${title}`
        } else {
            title = ""
            route = ""
        }
        const headerins = document.getElementById(`${id}`)
        if (headerins) {
            headerins.innerHTML = head(`${title}`, `${route}`)
        }
    }
    headInsert("headerIndex")
    headInsert("headertienda", "../", "Shop")
    headInsert("headerproducto", "../", "producto")
    // insertar navbar
    const barranav = document.getElementById("navbar")
    if (barranav) {
        barranav.innerHTML = navbar()
    } else {
        console.error("ID 'navbar'.")
    }
    // Insertar iconos redes sociales superiores 
    const icons = document.getElementById("social");
    if (icons) {
        var whatsappURLicon = urlWhatsapp(cel);
        icons.innerHTML = social(urlfacebook, urlinstagram, whatsappURLicon);
    } else {
        console.error("ID 'social'.");
    };
    //insertar footer
    const foot = document.getElementById("footer")
    if (foot) {
        foot.innerHTML = footer(cel, email)
    } else {
        console.error("ID 'footer'.")
    }
    //insertar boton de whatsapp
    const btnwpp = document.getElementById("botonwats");
    if (btnwpp) {
        var whatsappURLBtn = urlWhatsapp(cel, infoMessage);
        btnwpp.innerHTML = btnWhApp(whatsappURLBtn);
    } else {
        console.error("ID 'botonwats'.");
    };
    //insercion nombre web en index
    document.getElementById("nombre").innerHTML = webName
   
    //json productos filtro activos para imprimir en catalogo------------------------------------->
    const productosActivos = await obtainProducts();
    let productos = productosActivos
    //filtros de prodcutos por mas nuevos
    let productosRecientes = productosActivos
        .sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion))
        .slice(0, 4);
    //filtro de prodcutos por mas vistos
    let productosVistos = productosActivos
        .sort((a, b) => b.vistas - a.vistas)
        .slice(0, 4);
    
});