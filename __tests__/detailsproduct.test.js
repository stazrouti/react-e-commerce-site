import { detailProduct } from "../src/data";

describe('detailProduct', () => {
  it('should have specific properties', () => {
    expect(detailProduct).toHaveProperty('id');
    expect(detailProduct).toHaveProperty('title');
    expect(detailProduct).toHaveProperty('img');
    expect(detailProduct).toHaveProperty('price');
    expect(detailProduct).toHaveProperty('company');
    expect(detailProduct).toHaveProperty('info');
    expect(detailProduct).toHaveProperty('inCart');
    expect(detailProduct).toHaveProperty('count');
    expect(detailProduct).toHaveProperty('total');

    // testing for the value to do not be null
    it("should not be null"), () => {
      expect(detailProduct).not.toBeNull();
    }
  });
});
