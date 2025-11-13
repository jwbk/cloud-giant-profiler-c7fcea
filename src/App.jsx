import React from 'react';
import MixingDeck from './components/MixingDeck';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Mixing App</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <MixingDeck />
      </main>
      
      <footer className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 text-center">
          &copy; {new Date().getFullYear()} Mixing App
        </div>
      </footer>
    </div>
  );
}

export default App;