import React, {useState} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import LaunchList from './LaunchList';
import SearchArea from './SearchArea';

const apolloClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
});


function App({client}) {
  const [formState, updateForm] = useState({
    missionName: '',
    launchYear: '',
    rocketName: '',
  });

  const [launches, updateLaunches] = useState(null);

  const setFormState = (field, value) =>
    updateForm({...formState, [field]: value});

  return (
    <ApolloProvider client={apolloClient}>
      <SearchArea
        formState={formState}
        setFormState={setFormState}
        updateLaunches={updateLaunches}
      />
      {launches ? (
        <LaunchList launchList={launches} />
      ) : (
        <div>Please Enter Your Search</div>
      )}
  </ApolloProvider>
  );
}

export default App;
