
import useStockData from "../hooks/useStockData";

export const StockItem = ({ index, stock, calculateProfitLoss }) => {
  const { data } = useStockData(stock.symbol);
  console.log("data",data)
  const currentPrice = data && data["05. price"] ? Number(data["05. price"]).toFixed(2) : "";
    console.log("currentPrice",currentPrice)
  return (
    <li key={index} className="stock-item">
      <p>Symbol: {stock.symbol}</p>
      <p>Quantity: {stock.quantity}</p>
      <p>Purchase Price: ${stock.purchasePrice.toFixed(2)}</p>
      <p>Current Price: ${currentPrice}</p>
      <p>
        Profit/Loss:
        <span
          style={{
            color: currentPrice - stock.purchasePrice >= 0 ? "green" : "red",
          }}
        >
          $
          {calculateProfitLoss(
            stock.purchasePrice,
            currentPrice,
            stock.quantity
          )}
        </span>
      </p>
    </li>
  );
};

// import React from 'react';
// import useStockData from '../hooks/useStockData';

// const StockItem = ({ stock }) => {
//   const { data, loading, error } = useStockData(stock.symbol);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching data</div>;

//   const currentPrice = parseFloat(data["05. price"]);
//   const profitLoss = currentValue - (stock.price * stock.quantity);

//   return (
//     <li>
//       <span>Stock:{stock.symbol}</span>
//       <span>Purchase Price: ${stock.price.toFixed(2)}</span>
//       <span>Quantity: {stock.quantity}</span>
//       <span>Current Price: ${currentPrice.toFixed(2)}</span>
//       <span>Profit/Loss: ${profitLoss.toFixed(2)}</span>
//     </li>
//   );
// };

// export default StockItem;


