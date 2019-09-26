import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import LaunchList from './LaunchList';

function createQuery(missionName, launchYear, rocketName) {
  return gql`
    {
      launchesPast(limit: 10, find: {mission_name: "${missionName}", rocket_name: "${rocketName}", launch_year: "${launchYear}"}) {
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
      launchesUpcoming {
        id
        mission_name
        launch_year
        rocket {
          rocket_name
        }
      }
    }
  `;
}

function App() {
  const {loading, error, data} = useQuery(createQuery('', '', ''));
  const [formState, updateForm] = useState({
    missionName: '',
    launchYear: '',
    rocketName: '',
  });

  const setFormState = (field, value) =>
    updateForm({...formState, [field]: value});

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log('form state', formState);
  return (
    <div className="App">
      {Object.keys(formState).map((field, idx) => (
        <input
          key={idx}
          type="text"
          value={formState[field]}
          onChange={e => setFormState(field, e.target.value)}
        />
      ))}
      <LaunchList launchList={data.launchesPast} />
    </div>
  );
}

export default App;
