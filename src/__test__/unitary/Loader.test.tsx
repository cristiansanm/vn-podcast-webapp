import { Loader } from '@/components/Loader';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Loader Component', () => {
  it('renders the loader SVG', () => {
    render(<Loader />);

    const svgElement = screen.getByRole('status').querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass(
      'w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
    );
  });

  it('renders the "Loading..." text', () => {
    render(<Loader />);

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveClass('sr-only');
  });
});
