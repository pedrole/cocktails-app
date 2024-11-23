import React, { useState, useEffect } from 'react';

function App() {
  const [cocktails, setCocktails] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    // Change the URL if your backend is hosted on a different port or domain
    fetch('/api/cocktails')
      .then(response => response.json())
      .then(data => setCocktails(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);  // Empty array means this will run once when the component mounts

  return (
    <div className="container mx-auto p-4">
      <h1>Titulo</h1>
      <h1 className="text-4xl font-bold text-center mb-4">Cocktail Sharing App</h1>
      <div className="space-y-4">
        {cocktails.length === 0 ? (
          <p>Loading...</p>
        ) : (
          cocktails.map(cocktail => (
            <div key={cocktail.id} className="bg-gray-200 p-4 rounded-md">
              <h2 className="text-2xl font-bold">{cocktail.name}</h2>
              <p>{cocktail.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
