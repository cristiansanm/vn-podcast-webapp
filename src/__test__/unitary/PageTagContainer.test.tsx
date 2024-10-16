import { PageTagContainer } from '@/components/PageTagContainer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('PageTagContainer Component', () => {
  it('renders children correctly', () => {
    render(
      <PageTagContainer>
        <p>Test Child</p>
      </PageTagContainer>
    );

    const childElement = screen.getByText('Test Child');
    expect(childElement).toBeInTheDocument();
  });

  it('renders with the correct tag', () => {
    render(
      <PageTagContainer tag="section">
        <p>Test Child</p>
      </PageTagContainer>
    );

    const sectionElement = screen.getByText('Test Child').closest('section');
    expect(sectionElement).toBeInTheDocument();
  });

  it('applies the correct className', () => {
    render(
      <PageTagContainer className="custom-class">
        <p>Test Child</p>
      </PageTagContainer>
    );

    const divElement = screen.getByText('Test Child').closest('div');
    expect(divElement).toHaveClass('px-4 custom-class');
  });

  it('renders with default tag when no tag is provided', () => {
    render(
      <PageTagContainer>
        <p>Test Child</p>
      </PageTagContainer>
    );

    const divElement = screen.getByText('Test Child').closest('div');
    expect(divElement).toBeInTheDocument();
  });
});
