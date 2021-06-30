import React from 'react'

const api ={
  key: "e4d33e4eba8f5159627ebf500dc4b54e",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="App">
      <main>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
      </div>
      </main>
    </div>
  );
}

export default App;