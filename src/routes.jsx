import Product from "./components/layouts/Product"
import Cart from "./components/pages/Cart"
import Collections from "./components/pages/Collections"
import Home from "./components/pages/Home"

const routerItem = (path,element) => {
    return {
        path,element
    }
}

const routers = {
    home: routerItem('/', <Home />),
    collections: routerItem('/collections', <Collections />),
    cart: routerItem('/cart', <Cart />),
    product: routerItem('/product/:productId', <Product />)
}

const routerArr = Object.values(routers)

export {routers, routerArr}