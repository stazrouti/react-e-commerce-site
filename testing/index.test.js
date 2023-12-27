import React from 'react';
import { render, screen,waitFor,fireEvent } from '@testing-library/react';

import Index from '../pages/index';

describe('Index Component', () => {
  test('renders Index component', async () => {
    render(<Index />);
    await waitFor(() => {
      const elements = screen.queryAllByText(/The thumbnail image will be downloaded to your device./i);
      expect(elements).toHaveLength(1);
    });
  });
  

  test('updates videoURL state on input change', () => {
    render(<Index />);
    
    const inputElement = screen.getByPlaceholderText(/Enter YouTube URL/i);
    fireEvent.change(inputElement, { target: { value: 'https://www.youtube.com/watch?v=VIDEO_ID' } });

    // Ensure that the state is updated based on input change
    expect(inputElement.value).toBe('https://www.youtube.com/watch?v=VIDEO_ID');
  });

  test('calls getYouTubeThumbnail on button click', () => {
    render(<Index />);
    const inputElement = screen.getByPlaceholderText(/Enter YouTube URL/i);
    const buttonElement = screen.getByRole('button', { name: /Download Thumbnails/i });
  
    fireEvent.change(inputElement, { target: { value: 'https://www.youtube.com/watch?v=DWFPboBcH3w' } });
    fireEvent.click(buttonElement);
  
    // Add your assertions for the expected behavior after the button click
  });
  
  
  

  // Add more tests as needed for other functions and behaviors in the component
});
