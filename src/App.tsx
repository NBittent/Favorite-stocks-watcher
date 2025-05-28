import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface Stock {
  symbol: string;
  name: string;
  price: number;
}

function App() {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 185.85 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 397.58 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.38 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Favorite Stocks Watcher</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">Your Watchlist</h2>
          <button
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Stock
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stocks.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{stock.symbol}</h3>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">${stock.price}</span>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => {
                    setStocks(stocks.filter((s) => s.symbol !== stock.symbol));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;