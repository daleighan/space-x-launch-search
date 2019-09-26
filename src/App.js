import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';
import LaunchList from './LaunchList';

function createQuery({missionName, launchYear, rocketName}) {
  return gql`
    {
      launchesPast(limit: 10, find: {mission_name: "${missionName}", rocket_name: "${rocketName}", launch_year: "${launchYear}"}) {
        id
        mission_name
        launch_date_local
        links {
          video_link
        }
        rocket {
          rocket_name
        }
      }
      launchesUpcoming {
        id
        mission_name
        launch_date_local
        rocket {
          rocket_name
        }
      }
    }
  `;
}

function App() {
  const [formState, updateForm] = useState({
    missionName: '',
    launchYear: '',
    rocketName: '',
  });

  const setFormState = (field, value) =>
    updateForm({...formState, [field]: value});

  const [fetchLaunches, {called, loading, data}] = useLazyQuery(
    createQuery(formState),
  );

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
            <LaunchList launchList={data.launchesPast} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
