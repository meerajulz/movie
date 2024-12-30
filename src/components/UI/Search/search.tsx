import React from 'react';
import Title from '../Title/Title';
interface SearchComponentProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}


const Search: React.FC<SearchComponentProps> = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="flex justify-center items-center w-full bg-gray-100">
      <div className="w-full max-w-4xl p-4">
      <Title text="Millions of movies, TV shows and people to discover. Explore now." className='font-bold text-2xl' tag="h1" />
       
        <input
          type="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 text-lg border rounded border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default Search;
