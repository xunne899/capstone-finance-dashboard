// src/components/StockList.jsx
import React, { useContext } from 'react';
import { StockContext } from '../context/StockContext';

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
                        <li key={index} className="stock-item">
                            <p>Symbol: {stock.symbol}</p>
                            <p>Quantity: {stock.quantity}</p>
                            <p>Purchase Price: ${stock.purchasePrice.toFixed(2)}</p>
                            <p>Current Price: ${stock.currentPrice.toFixed(2)}</p>
                            <p>
                                Profit/Loss: 
                                <span 
                                    style={{ color: stock.currentPrice - stock.purchasePrice >= 0 ? 'green' : 'red' }}
                                >
                                    ${calculateProfitLoss(stock.purchasePrice, stock.currentPrice, stock.quantity)}
                                </span>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StockList;
