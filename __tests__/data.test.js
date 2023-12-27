import { storeProducts } from '../src/data';

describe('storeProducts', () => {
  it('should have an array of products', () => {
    expect(Array.isArray(storeProducts)).toBe(true);
    expect(storeProducts.length).toBeGreaterThan(0);
  });

  it('each product should have specific properties', () => {
    const sampleProduct = storeProducts[0];

    expect(sampleProduct).toHaveProperty('id');
    expect(sampleProduct).toHaveProperty('title');
    expect(sampleProduct).toHaveProperty('img');
    expect(sampleProduct).toHaveProperty('price');
    expect(sampleProduct).toHaveProperty('company');
    expect(sampleProduct).toHaveProperty('info');
    expect(sampleProduct).toHaveProperty('inCart');
    expect(sampleProduct).toHaveProperty('count');
    expect(sampleProduct).toHaveProperty('total');
  });
});
