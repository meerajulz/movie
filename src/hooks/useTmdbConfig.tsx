// src/hooks/useTmdbConfig.js

import { useState, useEffect } from 'react';

const useTmdbConfig = (apiKey: string) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      const url = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch TMDB configuration');
        const data = await response.json();
        setConfig(data.images);
      } catch (error) {
        console.error("Error fetching TMDB config:", error);
      }
    };

    if (!config) {
      fetchConfig();
    }
  }, [apiKey, config]);

  return config;
};

export default useTmdbConfig;
