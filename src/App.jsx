import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import { StockProvider } from './context/StockContext';
import StockEntryForm from './components/StockEntryForm';
import StockList from './components/StockList';
import './app.css'
const App = () => {
  return (
<StockProvider>
      <div className="app-container">
        <header className="header">
        <FontAwesomeIcon icon={faCoins} size="2x" className="icon"/>
       <h1>Finance Dashboard</h1>
        </header>
        <main className="main-content">
          <StockEntryForm />
          <StockList />
        </main>
      </div>
    </StockProvider>
  );
};

export default App;
