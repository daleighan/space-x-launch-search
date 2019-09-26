import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useLazyQuery} from '@apollo/react-hooks';
import LaunchList from './LaunchList';

const GET_LAUNCHES = gql`
  query Launch($missionName: String!, $rocketName: String!, $launchYear: String!) {
    launchesPast(find: {mission_name: $missionName, rocket_name: $rocketName, launch_year: $launchYear}) {
      id
      mission_name
      launch_year
      links {
        video_link
      }
      rocket {
        rocket_name
      }
    }
    launchesUpcoming(find: {mission_name: $missionName, rocket_name: $rocketName, launch_year: $launchYear}) {
      id
      mission_name
      launch_year
      links {
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;

function App() {
  const [formState, updateForm] = useState({
    missionName: '',
    launchYear: '',
    rocketName: '',
  });

  const setFormState = (field, value) =>
    updateForm({...formState, [field]: value});

  const [fetchLaunches, {called, data}] = useLazyQuery(GET_LAUNCHES, {
    variables: formState,
  });

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
          {data && <LaunchList launchList={data.launchesPast} />}
        </div>
      )}
    </div>
  );
}

export default App;
