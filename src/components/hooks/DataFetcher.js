import { useState, useEffect } from 'react';

function useDataFetcher(url) {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData({ tickets: result.tickets, users: result.users });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
}

export default useDataFetcher;
