import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('About Component', () => {

test('renders About component', () => {
    render(<About />);
    const titleElement = screen.getByText(/About Us/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('sets correct title and meta description in Head', () => {
    render(<About />);
    const titleElement = screen.getByText(/About Youtube Thumbnail Downloader/i);
    const metaDescriptionElement = screen.getByText(/About YouTube video thumbnails Downloader/i);
  
    expect(titleElement).toBeInTheDocument();
    expect(metaDescriptionElement).toBeInTheDocument();
  });
  test('renders content correctly', () => {
    render(<About />);
    const aboutText = screen.getByText(/What is  YouTube Thumbnail Downloader?/i);
    const whyUseText = screen.getByText(/Why Use the Thumbnail Downloader?/i);
    const conclusionText = screen.getByText(/Conclusion/i);
  
    expect(aboutText).toBeInTheDocument();
    expect(whyUseText).toBeInTheDocument();
    expect(conclusionText).toBeInTheDocument();
  });
});