import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
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
  const {loading, error, data} = useQuery(GET_LAUNCHES);
  console.log(loading, error, data);
  return <div className="App">Hello</div>;
}

export default App;
