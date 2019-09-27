import React from 'react';
import './SearchArea.css';

function SearchArea({client, formState, setFormState, fetchLaunches}) {
  return (
    <div className="flex-between" id="search-area">
      {Object.keys(formState).map((field, idx) => (
        <input
          key={idx}
          type="text"
          value={formState[field]}
          onChange={e => setFormState(field, e.target.value)}
          placeholder={
            field[0].toUpperCase() + field.replace(/([A-Z])/g, ' $1').slice(1)
          }
        />
      ))}
      <div className="button-center">
        <button onClick={() => fetchLaunches()}>Search</button>
      </div>
    </div>
  );
}

export default SearchArea;
