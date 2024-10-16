import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorOnLoad } from '../../components/ErrorOnLoad';

describe('ErrorOnLoad Component', () => {
  it('displays the error message', () => {
    const errorMessage = 'An error occurred';
    render(<ErrorOnLoad errorMessage={errorMessage} />);

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('text-red-500');
    expect(errorElement).toHaveClass('text-lg');
  });
});
