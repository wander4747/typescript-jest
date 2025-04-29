import { sum, multiply } from '../src/calc'

describe('Test calc - sum', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3)
        expect(sum(-1, -1)).toBe(-2)
        expect(sum(0, 0)).toBe(0)
        expect(sum(1.5, 2.5)).toBe(4)
    })
})

describe("Test calc - multiply", () => {
    it("should return multipl yof two numbers", () => {
      expect(multiply(4, 5)).toBe(20)
      expect(multiply(5, 10)).toBe(50)
    })
})