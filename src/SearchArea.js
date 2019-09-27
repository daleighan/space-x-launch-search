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
          placeholder={field}
        />
      ))}
      <div className="button-center">
        <button onClick={() => fetchLaunches()}>Search</button>
      </div>
    </div>
  );
}

export default SearchArea;
