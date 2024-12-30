import React from 'react';
interface TitleProps {
  text: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'; // Determines the header type
  className?: string; // Optional additional Tailwind CSS classes
  display?: 'inline' | 'block'; // Optional display style, default to 'block'
}

const Title: React.FC<TitleProps> = ({ text, tag: Tag, className, display }) => {
  return (
    <Tag
      className={` text-left text-gray-800 mt-4 mb-2 
        ${className} ${display === 'inline' ? 'inline' : 'block'}`}>
      {text}
    </Tag>
  );
};

export default Title;
