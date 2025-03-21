export function footer(cel,email){
    return`
    <div class="container-fluid footerimag">
        <div class="container-fluid d-flex justify-content-end miFooter">
            <div class="contenido text-start pe-5">
                <br>
                <h2 class="pe-3 pb-2"> Contactanos</h2>
                <br>
                <p ><i class="fa-solid fa-phone"></i>${cel}</p>
                <p ><i class="fa-solid fa-envelope"></i>${email}</p>
                <br>
            </div>
        </div>
    </div>
    `
}