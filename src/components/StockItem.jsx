import React from 'react';
import useStockData from '../hooks/useStockData';

const StockItem = ({ stock }) => {
  const { data, loading, error } = useStockData(stock.symbol);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const currentPrice = parseFloat(data["05. price"]);
  const profitLoss = currentValue - (stock.price * stock.quantity);

  return (
    <li>
      <span>Stock:{stock.symbol}</span>
      <span>Purchase Price: ${stock.price.toFixed(2)}</span>
      <span>Quantity: {stock.quantity}</span>
      <span>Current Price: ${currentPrice.toFixed(2)}</span>
      <span>Profit/Loss: ${profitLoss.toFixed(2)}</span>
    </li>
  );
};

export default StockItem;



