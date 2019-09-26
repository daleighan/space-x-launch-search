import React, {useState} from 'react';
import {useApolloClient} from '@apollo/react-hooks';
import LaunchList from './LaunchList';
import {GET_LAUNCHES} from './query.js';

function App() {
  const client = useApolloClient();

  const [formState, updateForm] = useState({
    missionName: '',
    launchYear: '',
    rocketName: '',
  });

  const [launches, updateLaunches] = useState(null);

  const setFormState = (field, value) =>
    updateForm({...formState, [field]: value});

  return (
    <div className="App">
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
      {launches ? <LaunchList launchList={launches} /> : <div>Please Enter Your Search</div>}
    </div>
  );
}

export default App;
