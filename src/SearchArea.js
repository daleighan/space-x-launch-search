import React from 'react';

function SearchArea({client, formState, setFormState, fetchLaunches}) {
  return (
    <div>
      {Object.keys(formState).map((field, idx) => (
        <input
          key={idx}
          type="text"
          value={formState[field]}
          onChange={e => setFormState(field, e.target.value)}
          placeholder={field}
        />
      ))}
      <button
        onClick={async () => await fetchLaunches()}>
        Search
      </button>
    </div>
  );
}

export default SearchArea;
