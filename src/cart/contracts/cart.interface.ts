import Product from "@/product/product";

export interface CartInterface {
    addItem(item: Product): void;
    removeItem(item: Product): void;
    get items(): readonly Product[];
    total(): number;
    isEmpty(): boolean;
    clear(): void;
}

export interface CartInterface2<T> {
    addItem(item: Product): void;
    removeItem(item: Product): void;
    get items(): readonly T[];
    total(): number;
    isEmpty(): boolean;
    clear(): void;
}