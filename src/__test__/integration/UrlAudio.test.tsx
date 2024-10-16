import { UrlAudio } from '@/modules/EpisodeDetail/components';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('UrlAudio Component', () => {
  it('renders loading state', () => {
    render(<UrlAudio isLoading={true} hasError={false} finalUrlAudio="" />);
    const loadingElement = screen.getByText('Loading audio...');
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveClass('text-sm font-light animate-pulse py-4');
  });

  it('renders error state', () => {
    render(<UrlAudio isLoading={false} hasError={true} finalUrlAudio="" />);
    const errorElement = screen.getByText('Error loading audio');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('text-sm font-light text-red-400 py-4');
  });

  it('renders audio element when finalUrlAudio is provided', () => {
    render(
      <UrlAudio
        isLoading={false}
        hasError={false}
        finalUrlAudio="http://webaudioapi.com/samples/audio-tag/chrono.mp3"
      />
    );
    const audioElement = screen.getByRole('tree');
    expect(audioElement).toBeInTheDocument();
    expect(audioElement).toHaveClass('w-full h-16');
  });

  it('renders nothing when finalUrlAudio is empty and not loading or error', () => {
    const { container } = render(<UrlAudio isLoading={false} hasError={false} finalUrlAudio="" />);
    expect(container.firstChild).toBeNull();
  });
});
