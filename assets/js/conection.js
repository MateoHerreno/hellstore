const API_URL = "https://catalogoapi-tldw.onrender.com";

export async function obtainProducts() {
    try {
        const response = await fetch(`${API_URL}/allProducts`);
        if (!response.ok) throw new Error("Error al obtener productos");
        let products = await response.json();//en esta variable esta todos los productos que trae el api
        let productsActives = products.filter(products => products.estado !== "inactivo");
        return productsActives;
    } catch (error) {
        console.error("Error en la conexión:", error);
        return [];
    }
};

export async function obtaincredential() {
    try{
        const response = await fetch(`${API_URL}/number`);
        if (!response.ok) throw new Error("Error al obtener productos");
        let credenciales = await response.json();//en esta variable esta todos los productos que trae el api
        return credenciales[0];
    } catch (error) {
        console.error("Error en la conexión:", error);
        return [];
    }
};



