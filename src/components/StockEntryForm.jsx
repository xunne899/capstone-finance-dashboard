// src/components/StockEntryForm.jsx
// import React, { useState, useContext } from 'react';
// import { StockContext } from '../context/StockContext';
// import useStockData from '../hooks/useStockData';

// const StockEntryForm = () => {
//   const { addStock } = useContext(StockContext);
//   const [symbol, setSymbol] = useState('');
//   const [price, setPrice] = useState('');
//   const [quantity, setQuantity] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data, error } = useStockData(symbol);
//     if (!error && data) {
//       addStock({ symbol, price: parseFloat(price), quantity: parseInt(quantity) });
//       setSymbol('');
//       setPrice('');
//       setQuantity('');
//     } else {
//       alert('Invalid stock symbol');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="Stock Symbol" required />
//       <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Purchase Price" type="number" required />
//       <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" type="number" required />
//       <button type="submit">Add Stock</button>
//     </form>
//   );
// };

// export default StockEntryForm;






//  src/components/StockForm.jsx
import React, { useState, useContext } from 'react';
import { StockContext } from '../context/StockContext';
import { mockData } from '../mockData';

const StockEntryForm = () => {
    const [symbol, setSymbol] = useState('');
    const [quantity, setQuantity] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const { stocks, setStocks } = useContext(StockContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const stock = mockData.find(
            (data) => data["Global Quote"]["01. symbol"].toUpperCase() === symbol.toUpperCase()
        );

        if (stock) {
            const newStock = {
                symbol: stock["Global Quote"]["01. symbol"],
                quantity: parseFloat(quantity),
                purchasePrice: parseFloat(purchasePrice),
                currentPrice: parseFloat(stock["Global Quote"]["05. price"]),
            };
            setStocks([...stocks, newStock]);
            setSymbol('');
            setQuantity('');
            setPurchasePrice('');
        } else {
            alert('Invalid stock symbol');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Stock Symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Purchase Price"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                required
            />
            <button type="submit">Add Stock</button>
        </form>
    );
};

export default StockEntryForm;




