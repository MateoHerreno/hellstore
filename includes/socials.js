export function social(facebook, instagram, Whatsapp) {
    return `
    <header id="header" class="py-1">
        <div class="container d-flex justify-content-end center justify-content-md-end pe-1">
             <div class="redes-sociales d-flex gap-3">
                <a href="${instagram}" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="${Whatsapp}" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a href="${facebook}" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>
        </div>
    </header>`
}