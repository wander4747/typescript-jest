
import Product from "../product/product"
import Cart2 from "./cart2"

const makeCart = (): Cart2 => {
    return new Cart2()
}

const makeProduct = (name: string, price: number): Product => {
    return new Product(name, price)
}

describe("Cart", () => {
    it("should start empty", () => {
        const cart = makeCart()

        expect(cart.items).toHaveLength(0)
        expect(cart.isEmpty()).toBe(true)
    })

    it("should add an item to the cart", () => {
        const cart =  makeCart()
        const product = makeProduct("Product 1", 10)
        const product2 = makeProduct("Product 2", 10)

        expect(cart.isEmpty()).toBe(true)
        
        cart.addItem(product)
        cart.addItem(product2)
        cart.addItem(product)

        expect(cart.items.length).toBe(2)
    })

    it("should remove an item from the cart", () => {
        const cart = makeCart()
        const product1 = makeProduct("Product 1", 10)
        const product2 = makeProduct("Product 2", 20)

        cart.addItem(product1)
        cart.addItem(product2)
        cart.addItem(product1)

        expect(cart.items).toHaveLength(2)

        cart.removeItem(product1)

        expect(cart.items).toHaveLength(1)
        expect(cart.items).not.toContain(product1)
    })

    it('should empty if add two and remove two', () => {
        const cart = makeCart()
        const product1 = makeProduct('prod1', 10)
        const product2 = makeProduct('prod2', 10)

        cart.addItem(product1)
        cart.addItem(product2)

        expect(cart.items.length).toBe(2)

        cart.removeItem(product1)
        cart.removeItem(product2)

        expect(cart.isEmpty).toBeTruthy()
    })

    it("should calculate the total", () => {
        const cart = makeCart()
        const product1 = makeProduct("Product 1", 10)
        const product2 = makeProduct("Product 2", 20)

        cart.addItem(product1)
        cart.addItem(product1)
        cart.addItem(product2)

        expect(cart.total()).toBe(40)
    })

    it("should clear the cart", () => {
        const cart = makeCart()
        const product1 = makeProduct("Product 1", 10)
        const product2 = makeProduct("Product 2", 20)

        cart.addItem(product1)
        cart.addItem(product2)
        cart.addItem(product1)

        expect(cart.items).toHaveLength(2)

        cart.clear()

        expect(cart.items).toHaveLength(0)
        expect(cart.isEmpty()).toBe(true)
    })
})