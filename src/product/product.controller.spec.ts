import ProductRepositoryInterface from "./contracts/product.interface";
import Product from "./product";
import ProductController from "./product.controller"

const makeSut = () => {
    // class ProductRepositorySQL implements ProductRepositoryInterface {
    //     findAll(): Product[] {
    //         return []
    //     }
    //     save(name: string, price: number): Product {
    //         return new Product(name, price)
    //     }
    // }

    // const controller = new ProductController(new ProductRepositorySQL)

    const mockRepository: jest.Mocked<ProductRepositoryInterface> = {
        findAll: jest.fn(),
        save: jest.fn(),
    }

    const controller = new ProductController(mockRepository)

    return {
        controller,
        mockRepository
    }
}

describe('ProductController', () => {
    it('should get all products', () => {
        const { controller, mockRepository } = makeSut()
        controller.getAll()
        expect(mockRepository.findAll).toHaveBeenCalledTimes(1)
    })

    it('should save a product', () => {
        const { controller, mockRepository } = makeSut()
        const name = 'Product 1'
        const price = 10
        controller.store(name, price)
        expect(mockRepository.save).toHaveBeenCalledWith(name, price)
        expect(mockRepository.save).toHaveBeenCalledTimes(1)
    })
})