import { useState, useEffect } from 'react';

interface ApiFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

function useApiFetch<T>(url: string, token: string): ApiFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,  // Ensure "Bearer" is properly included here
            'Accept': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          console.error(error);
        } else {
          setError(String(error));
          console.error(String(error));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    console.log('Fetching data...', data);
  }, [url, token]);

  return { data, isLoading, error };
}

export default useApiFetch;
