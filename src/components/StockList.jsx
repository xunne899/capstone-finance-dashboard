// src/components/StockList.jsx
import React, { useContext } from 'react';
import { StockContext } from '../context/StockContext';
import StockItem from './StockItem';


const StockList = () => {
  const { stocks } = useContext(StockContext);

  return (
    <div className="stock-list">
      {stocks.length === 0 ? (
        <p>No stocks available. Add stocks to your portfolio.</p>
      ) : (
        stocks.map(stock => <StockItem key={stock.symbol} stock={stock} />)
      )}
    </div>
  );
};

export default StockList;