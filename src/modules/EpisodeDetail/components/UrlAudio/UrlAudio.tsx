import { FC } from 'react';

export const UrlAudio: FC<{
  finalUrlAudio: string;
  hasError: boolean;
  isLoading: boolean;
}> = ({ isLoading, hasError, finalUrlAudio }) => {
  if (isLoading) {
    return <p className="text-sm font-light animate-pulse py-4">Loading audio...</p>;
  }
  if (hasError) {
    return <p className="text-sm font-light text-red-400 py-4">Error loading audio</p>;
  }
  return finalUrlAudio ? (
    <div className="w-full">
      <video role="tree" controls className="w-full h-16">
        <source src={finalUrlAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </video>
    </div>
  ) : null;
};
