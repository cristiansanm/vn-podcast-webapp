import { SkeletonItem } from '@/components/SkeletonItem';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('SkeletonItem Component', () => {
  it('renders the skeleton avatar', () => {
    render(<SkeletonItem />);

    const avatarElement = screen.getByRole('status').querySelector('span');
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveClass(
      'flex justify-center items-center bg-gray-300 rounded-full w-12 h-12'
    );
  });

  it('renders the skeleton title', () => {
    render(<SkeletonItem />);

    const titleElement = screen.getByRole('status').querySelector('h3');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('h-3 bg-gray-300 rounded-full w-48 mb-4');
  });

  it('renders the skeleton paragraphs', () => {
    render(<SkeletonItem />);

    const paragraphElements = screen.getByRole('status').querySelectorAll('p');
    expect(paragraphElements).toHaveLength(2);
    paragraphElements.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveClass('h-2 bg-gray-300 rounded-full w-[320px] mb-2.5');
    });
  });
});
