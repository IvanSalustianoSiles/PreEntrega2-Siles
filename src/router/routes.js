import { ItemDetailContainer, ItemListContainer, Cart, CheckoutContainer } from "../components/pages"

export const routes = [
    {id: "home", path: "/", Element: ItemListContainer},
    {id: "homeSearch", path: "/:title", Element: ItemListContainer},
    {id: "homeCategory", path: "/category/:category", Element: ItemListContainer},
    {id: "cart", path: "/cart", Element: Cart,},
    {id: "productDetail", path: "/product/:id", Element: ItemDetailContainer},
    {id: "checkout", path: "checkout", Element: CheckoutContainer}
]


