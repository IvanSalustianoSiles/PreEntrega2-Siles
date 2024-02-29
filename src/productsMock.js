export let products = [
    {id: "1", title: "Trigonometría", imageUrl: "https://i.imgur.com/NvYDOGv.jpeg", price: "$" + 19.99, category: "secundario", description: "Todo sobre triángulos.", stock: 50},
    {id: "2", title: "Álgebra lineal", imageUrl: "https://i.imgur.com/YHyrmFB.jpeg", price: "$" + 14.99, category: "universitario", description: "Vectores, matrices, polinomios y mucho más!", stock: 92},
    {id: "3", title: "Análisis Matemático I", imageUrl: "https://i.imgur.com/JU9q4fB.png", price: "$" + 19.99, category: "universitario", description: "Límites, derivadas, integrales y series; definiciones formales y ejemplos.", stock: 46},
    {id: "4", title: "Ecuaciones lineales", imageUrl: "https://i.imgur.com/DHNUqoE.jpeg", price: "$" + 9.99, category: "secundario", description: "Ejercicios y explicaciones sobre ecuaciones lineales.", stock: 39},
    {id: "5", title: "Operaciones básicas", imageUrl: "https://i.imgur.com/1gZJad1.png", price: "$" + 6.99, category: "primario", description: "Suma, resta, división, multiplicación, raíz y potencia.", stock: 60},
    {id: "6", title: "Factorización", imageUrl: "https://i.imgur.com/oYZ0aDY.jpeg", price: "$" + 9.99, category: "secundario", description: "Ejemplos y definición de factorización.", stock: 200},
    {id: "7", title: "Tablas de multiplicar", imageUrl: "https://i.imgur.com/iedo9vL.png", price: "$" + 4.99, category: "primario", description: "Todas las tablas de multiplicar.", stock: 150}
];
export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject("Error, no hay productos.");
        }
    })
}
export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        if (products.length > 0) {
            const item = products.find((product) => product.id === id)
            setTimeout(() => {
                if (item) {
                    resolve(item);
                } else {
                    reject(`No se ha encontrado el producto de id "${id}".`)
                }
            }, 2000);
        } else {
            reject("Error, no hay productos.");
        }
    })
}