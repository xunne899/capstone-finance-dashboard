import React from 'react';
import { StockProvider } from './context/StockContext';
import StockEntryForm from './components/StockEntryForm';
import StockList from './components/StockList';
import './app.css'
const App = () => {
  return (
<StockProvider>
      <div className="app-container">
        <header className="header">
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
