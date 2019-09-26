import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import LaunchList from './LaunchList';

function createQuery(missionName, launchYear, rocketName) {
  return gql`
    {
      launchesPast(find: {mission_name: "${missionName}", launch_year: "${launchYear}", rocket_name: "${rocketName}"}) {
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
}

function App() {
  const {loading, error, data} = useQuery(createQuery('', '', ''));
  const [text, setText] = useState('')
  console.log(text);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="App">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <LaunchList launchList={data.launchesPast} />
    </div>
  );
}

export default App;
