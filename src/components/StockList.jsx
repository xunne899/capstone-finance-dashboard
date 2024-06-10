// src/components/StockList.jsx
import React, { useContext } from 'react';
import { StockContext } from '../context/StockContext';
import { StockItem } from "./StockItem";


const StockList = () => {
    const { stocks } = useContext(StockContext);

    const calculateProfitLoss = (purchasePrice, currentPrice, quantity) => {
        return ((currentPrice - purchasePrice) * quantity).toFixed(2);
    };

    return (
        <div>
            {stocks.length === 0 ? (
                <p>No stocks available.Please add Stocks</p>
            ) : (
                <ul>
        {stocks.map((stock, index) => (
            <StockItem
              key={index}
              index={index}
              stock={stock}
              calculateProfitLoss={calculateProfitLoss}
            />
          ))}
                </ul>
            )}
        </div>
    );
};

export default StockList;
