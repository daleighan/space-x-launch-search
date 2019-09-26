import React from 'react';
import {withApollo} from 'react-apollo';
import {GET_LAUNCHES} from './query.js';

function SearchArea({client, formState, setFormState, updateLaunches}) {
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
        onClick={async () => {
          const {data} = await client.query({
            query: GET_LAUNCHES,
            variables: formState,
          });
          updateLaunches([...data.launchesPast, ...data.launchesUpcoming]);
        }}>
        Search
      </button>
    </div>
  );
}

export default withApollo(SearchArea);
