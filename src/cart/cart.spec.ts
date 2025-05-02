
import Product from "../product/product"
import Cart from "./cart"

describe("Cart", () => {
    it("should start empty", () => {
        const cart = new Cart()

        expect(cart.items).toHaveLength(0)
        expect(cart.isEmpty()).toBe(true)
    })

    it("should add an item to the cart", () => {
        const cart = new Cart()
        const product = new Product("Product 1", 10)

        cart.addItem(product)

        expect(cart.items).toContain(product)
        expect(cart.items.length).toBe(1)
    })
})