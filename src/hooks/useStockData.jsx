import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useStockData = (symbol) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${MPQ2A9RO3QINSNOD}`);
   
      const quote = response.data["Global Quote"];
      if (quote && quote["05. price"]) {
        setData(quote);
      } else {
        setError('Invalid stock symbol');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [symbol]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useStockData;