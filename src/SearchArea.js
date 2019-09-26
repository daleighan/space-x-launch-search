import React from 'react';

function SearchArea({client, formState, setFormState, fetchLaunches}) {
  return (
    <div className="flex-center">
      {Object.keys(formState).map((field, idx) => (
        <input
          key={idx}
          type="text"
          value={formState[field]}
          onChange={e => setFormState(field, e.target.value)}
          placeholder={field}
        />
      ))}
      <button onClick={() => fetchLaunches()}>Search</button>
    </div>
  );
}

export default SearchArea;
