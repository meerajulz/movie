import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/UI/Search/search';
import Title from './components/UI/Title/Title';
import useApiFetch from './hooks/ApiFetchResult';
import { TrendingMovies } from './interfaces/types';
import MovieList from './components/MoveList/movie-list';
import ToggleSwitch from './components/UI/ToggleSwitch/toggle-switch';

function App() {

  const netflix = 8;
  const apple = 350;
  const prime = 119;


  const [searchValue, setSearchValue] = useState('');
  const [active, setActive] = useState(0);
  const [activeS, setActiveS] = useState(0);
  const [type, setType] = useState('day');
  const [typeStreaming, setTypeStreaming] = useState(netflix);

  const apiKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjg0YTQ3ZjBjYTllNzYyNzM2MzdiZDc3NTk1YjBlOSIsIm5iZiI6MTYwNjM3NjkwMi40NTEsInN1YiI6IjVmYmY1ZGM2MzIzZWJhMDAzZWZlNWYzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sbh_dq7vINxXKdaca-dO0BZIL5advaDdsgy2jJUvgs8';
  
    const trendingUrl = `https://api.themoviedb.org/3/trending/movie/${type}`;
  const streamingUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.asc&with_watch_providers=${typeStreaming}&watch_region=ES`;

 
  const {
    data: trendingData,
    isLoading: trendingLoading,
    error: trendingError
  } = useApiFetch<TrendingMovies>(trendingUrl, apiKey);

  const {
    data: streamingData,
    isLoading: streamingLoading,
    error: streamingError
  } = useApiFetch<TrendingMovies>(streamingUrl, apiKey);


  if (trendingLoading || streamingLoading) return <div>Loading...</div>;
  if (trendingError || streamingError) return <div>Error: {trendingError || streamingError}</div>;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleToggle = (activeIndex: number) => {
    // Set 'day' for index 0 (Today), 'week' for index 1 (This Week)
    const newType = activeIndex === 0 ? 'day' : 'week';
    setType(newType);
    setActive(activeIndex);
  };

  const handleToggleStreming = (activeIndex: number) => {
    // Set streaming service ID based on active index
    let newType = 8;
    switch (activeIndex) {
      case 0:
        newType = netflix;
        break;
      case 1:
        newType = apple;
        break;
      case 2:
        newType = prime;
        break;
      default:
        newType = netflix;
    }
    console.log('newType', newType);
    setTypeStreaming(newType);
    setActiveS(activeIndex);
  };

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <Search
        value={searchValue}
        onChange={(e) => handleSearchChange(e)}
        placeholder="Search movies..."
      />
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-4xl p-4 bg-white p-4 overflow-auto">
          <section>
            <div>
              <Title
                text="Trending"
                tag="h2"
                className="text-2xl font-bold mr-2"
                display="inline"
              />
              <ToggleSwitch
                labels={['Today', 'This Week']}
                initialActive={active}
                onToggle={handleToggle}
              />
            </div>
            {trendingData && trendingData.results && (
              <MovieList movies={trendingData.results} apiKey={apiKey} />
            )}
          </section>
          <section>Main content trailers here...</section>

          <section>
            <div>
              <Title
                text="What's Popular"
                tag="h2"
                className="text-2xl font-bold mr-2"
                display="inline"
              />
              <ToggleSwitch
                labels={['Netflix', 'Apple TV', 'Prime Video']}
                initialActive={activeS}
                onToggle={handleToggleStreming}
              />
            </div>
            {streamingData && streamingData.results && (
              <MovieList movies={streamingData.results} apiKey={apiKey} />
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
