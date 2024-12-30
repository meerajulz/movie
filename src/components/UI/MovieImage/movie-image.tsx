import React from 'react';

interface MovieImageProps {
  apiKey: string;
  filePath: string;
  size?: 'original' | 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'w1280' | 'h632' | 'w300' | 'w780' | 'w1280' | 'original';
  alt: string;
  className?: string;
}

const MovieImage: React.FC<MovieImageProps> = ({ apiKey, filePath, size = 'w92', alt, className }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/${size}${filePath}?api_key=${apiKey}`}
      alt={alt}
      className={`w-[201px] h-auto ${className}`}
    />
  );
};

export default MovieImage;
