import Product from "@/product/product";
import { CartInterface } from "./contracts/cart.interface";

export default class Cart implements CartInterface { 
    private readonly _items: Product[] = []

    addItem(product: Product): void {
        this._items.push(product);
    }

    removeItem(item: Product): void {
        const index = this._items.indexOf(item)
        this._items.splice(index, 1)
    }

    get items(): readonly Product[] {
        return this._items
    }

    total(): number {
        let total = 0
        
        this._items.map(product => {
            total += product.price
        })
        
        return total
    }

    isEmpty(): boolean {
        return this._items.length === 0
    }
    
    clear(): void {
        this._items.length = 0
    }
}