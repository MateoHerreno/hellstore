export function navbar(){
    return`
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container-fluid">
            <a class="navbar-brand" href="../index.html"><img class="icono-nav" src="/assets/img/logo1.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
                    <li class="">
                        <a class="itemNav" href="../index.html">Inicio</a>
                    </li>
                    <li class="">
                        <a class="itemNav" href="/pages/tienda.html">Tienda</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}