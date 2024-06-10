

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { mockData } from "../mockData";
const useStockData = (symbol) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      // TODO: remove mock data and add back API call
      // const response = await axios.get(
      //   `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=G15YSZ8HLKGLDGID`
      // );
      // const quote = response.data["Global Quote"];
      // console.log("data", quote)
      const quote = mockData;
         console.log("data", quote)
      if (quote && quote["05. price"]) {
        setData(quote);
        setError(null);
      } else {
        setError("Invalid stock symbol");
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


// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const useStockData = (symbol) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=G15YSZ8HLKGLDGID`);
//    console.log("response",response)

//       const quote = response.data["Global Quote"];
//       if (quote && quote["05. price"]) {
//         setData(quote);
//       } else {
//         setError('Invalid stock symbol');
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [symbol]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return { data, loading, error };
// };

// export default useStockData;



// import { useState, useEffect, useCallback } from "react";
// import { mockData } from "../mockData";  // Import your mock data

// const useStockData = (symbol) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = useCallback(async () => {
//     try {
//       // Simulate API call by filtering mockData for the given symbol
//       const mockResponse = mockData.find(
//         (item) => item["Global Quote"]["01. symbol"] === symbol
//       );
      
//       // If symbol is found in mockData, extract the Global Quote
//       const quote = mockResponse ? mockResponse["Global Quote"] : null;
//       console.log("data", quote); // Log the fetched data for debugging

//       if (quote && quote["05. price"]) {
//         setData(quote); // Set the fetched data
//         setError(null); // Clear any previous errors
//       } else {
//         setError("Invalid stock symbol"); // Set error if no data is found
//       }
//     } catch (err) {
//       setError(err.message); // Set error message if exception occurs
//     } finally {
//       setLoading(false); // Set loading to false after data is fetched
//     }
//   }, [symbol]);

//   useEffect(() => {
//     fetchData(); // Fetch data when component mounts or symbol changes
//   }, [fetchData]);

//   return { data, loading, error }; // Return data, loading status, and error
// };

// export default useStockData;








// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useStockData = (symbol) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=MPQ2A9RO3QINSNOD`
//         );
//         const quote = response.data["Global Quote"];
//         if (quote && quote["05. price"]) {
//           setData(quote);
//         } else {
//           setError('Invalid stock symbol');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (symbol) {
//       fetchData();
//     }
//   }, [symbol]);

//   return { data, loading, error };
// };

// export default useStockData;