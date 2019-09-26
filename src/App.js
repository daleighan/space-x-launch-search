import React, {useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import LaunchList from './LaunchList';
import {GET_LAUNCHES} from './query.js';

function App() {
  const [formState, updateForm] = useState({
    missionName: '',
    launchYear: '',
    rocketName: '',
  });

  const [fetchLaunches, {called, loading, data}] = useLazyQuery(GET_LAUNCHES, {
    variables: formState,
  });

  const setFormState = (field, value) =>
    updateForm({...formState, [field]: value});


  return (
    <div className="App">
      {Object.keys(formState).map((field, idx) => (
        <input
          key={idx}
          type="text"
          value={formState[field]}
          onChange={e => setFormState(field, e.target.value)}
          placeholder={field}
        />
      ))}
      <button onClick={() => fetchLaunches(formState)}>Search</button>
      {!called ? (
        <div>Please Enter A Search</div>
      ) : (
        <div>
          {loading ? (
            <div>loading...</div>
          ) : (
            <LaunchList
              launchList={[...data.launchesPast, ...data.launchesUpcoming]}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
