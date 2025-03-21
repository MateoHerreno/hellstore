//generate url whats
export function urlWhatsapp(cel, message) {
    let url = `https://wa.me/${cel}`;
    if (message) {
        url += `?text=${encodeURIComponent(message)}`;
    }
    return url;
}
//create button
export function btnWhApp(url) {
    return `
        <a href="${url}" target="_blank" class="whatsapp-btn">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
    `;
}