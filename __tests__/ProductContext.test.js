import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductProvider,ProductConsumer } from '../src/context';

describe('ProductContext', () => {
  it('should render without crashing', () => {
    render(
      <ProductProvider>
        <ProductConsumer>{() => <div>Test Component</div>}</ProductConsumer>
      </ProductProvider>
    );

    const testComponent = screen.getByText('Test Component');
    expect(testComponent).toBeInTheDocument();
  });

  it('should handle addToCart and increment functions', () => {
    render(
      <ProductProvider>
        <ProductConsumer>
          {({ addToCart, increment, cart }) => (
            <div>
              <button onClick={() => addToCart(1)}>Add to Cart</button>
              <button onClick={() => increment(1)}>Increment</button>
              <div data-testid="cart-count">{cart.length}</div>
            </div>
          )}
        </ProductConsumer>
      </ProductProvider>
    );

    const addToCartButton = screen.getByText('Add to Cart');
    const incrementButton = screen.getByText('Increment');
    const cartCount = screen.getByTestId('cart-count');

    // Click "Add to Cart" button
    userEvent.click(addToCartButton);
    expect(cartCount.textContent).toBe('1');

    // Click "Increment" button
    userEvent.click(incrementButton);
    expect(cartCount.textContent).toBe('2');
  });

  // Add more test cases based on the functionality of your context
});
