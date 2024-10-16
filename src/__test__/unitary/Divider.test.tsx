import { render } from '@testing-library/react';
import { Divider } from '@/components/Divider';

describe('Divider Component', () => {
  it('renders a horizontal divider by default', () => {
    const { container } = render(<Divider />);
    const div = container.firstChild;
    expect(div).toHaveStyle('width: 100%');
    expect(div).toHaveStyle('height: 1rem');
    expect(div).toHaveStyle('border-bottom: none');
  });

  it('renders a vertical divider', () => {
    const { container } = render(<Divider orientation="vertical" />);
    const div = container.firstChild;
    expect(div).toHaveStyle('width: 1rem');
    expect(div).toHaveStyle('height: 100%');
    expect(div).toHaveStyle('border-right: none');
  });

  it('renders a horizontal divider with border', () => {
    const { container } = render(<Divider hasBorder borderColor="red" borderWidth="2px" />);
    const div = container.firstChild;
    expect(div).toHaveStyle('border-bottom: 2px solid red');
  });

  it('renders a vertical divider with border', () => {
    const { container } = render(
      <Divider orientation="vertical" hasBorder borderColor="blue" borderWidth="3px" />
    );
    const div = container.firstChild;
    expect(div).toHaveStyle('border-right: 3px solid blue');
  });
});
