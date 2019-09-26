import React, {useState} from 'react';
import LaunchList from './LaunchList';
import SearchArea from './SearchArea';
import {withApollo} from 'react-apollo';
import {GET_LAUNCHES} from './query.js';

function Container({client}) {
  const [formState, updateForm] = useState({
    missionName: '',
    launchYear: '',
    rocketName: '',
  });

  const [launches, updateLaunches] = useState(null);

  const setFormState = (field, value) =>
    updateForm({...formState, [field]: value});

  const fetchLaunches = async function() {
    const {data} = await client.query({
      query: GET_LAUNCHES,
      variables: formState,
    });
    updateLaunches([...data.launchesPast, ...data.launchesUpcoming]);
  };

  return (
    <div>
      <SearchArea
        formState={formState}
        setFormState={setFormState}
        fetchLaunches={fetchLaunches}
      />
      {launches ? (
        <LaunchList launchList={launches} />
      ) : (
        <div>Please Enter Your Search</div>
      )}
    </div>
  );
}

export default withApollo(Container);
