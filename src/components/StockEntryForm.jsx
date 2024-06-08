// src/components/StockEntryForm.jsx
import React, { useState, useContext } from 'react';
import { StockContext } from '../context/StockContext';


const StockEntryForm = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const { addStock } = useContext(StockContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol && quantity > 0 && price > 0) {
      addStock({ symbol, quantity: parseInt(quantity), price: parseFloat(price) });
      setSymbol('');
      setQuantity('');
      setPrice('');
    }
  };

  return (
    <form className="stock-form" onSubmit={handleSubmit}>
      <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value.toUpperCase())} placeholder="Stock Symbol" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Purchase Price" required />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockEntryForm;
