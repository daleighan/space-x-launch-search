import React, {useState} from 'react';
import LaunchList from './LaunchList';
import SearchArea from './SearchArea';
import {withApollo} from 'react-apollo';
import {GET_LAUNCHES} from './query.js';
import './TopLevel.css';
import rocket from './rocket.svg';

function Container({client}) {
  const [formState, updateForm] = useState({
    missionName: '',
    launchYear: '',
    rocketName: '',
  });

  const [launches, updateLaunches] = useState(null);

  const setFormState = (field, value) =>
    updateForm({...formState, [field]: value});

  const fetchLaunches = async () => {
    const {data} = await client.query({
      query: GET_LAUNCHES,
      variables: formState,
    });
    updateLaunches([...data.launchesPast, ...data.launchesUpcoming]);
  };

  return (
    <div className="flex-center">
      <div className="container">
        <h1 class="title"><img className="rocket-ship" src={rocket} alt={''}/> SpaceX Launch Search</h1>
        <SearchArea
          formState={formState}
          setFormState={setFormState}
          fetchLaunches={fetchLaunches}
        />
        {launches ? (
          <LaunchList launchList={launches} />
        ) : (
          <div className="flex-center mt">Please Enter Your Search</div>
        )}
      </div>
    </div>
  );
}

export default withApollo(Container);
