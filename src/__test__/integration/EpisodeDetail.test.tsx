import { EpisodeDetailCard } from '@/modules/EpisodeDetail/components/EpisodeDetailCard';
import { EpisodeDetail } from '@/modules/EpisodeDetail/model';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const mockEpisode: EpisodeDetail = {
  title: 'Test Episode',
  description: '<p>This is a test episode description.</p>',
  pubDate: '2023-01-01',
  mediaAudio: 'http://webaudioapi.com/samples/audio-tag/chrono.mp3',
  duration: '00:00:00',
  guid: '123345',
  htmlDescription: 'This is a test episode description.',
};

describe('EpisodeDetailCard Component', () => {
  it('renders the episode title', () => {
    render(<EpisodeDetailCard episode={mockEpisode} />);
    const titleElement = screen.getByText('Test Episode');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the episode publication date', () => {
    render(<EpisodeDetailCard episode={mockEpisode} />);
    const pubDateElement = screen.getByText('2023-01-01');
    expect(pubDateElement).toBeInTheDocument();
  });

  it('renders the episode description', () => {
    render(<EpisodeDetailCard episode={mockEpisode} />);
    const descriptionElement = screen.getByText('This is a test episode description.', {
      selector: 'p',
    });
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the loading UrlAudio component', () => {
    render(<EpisodeDetailCard episode={mockEpisode} />);
    const audioElement = screen.getByText('Loading audio...');
    expect(audioElement).toBeInTheDocument();
  });
});
