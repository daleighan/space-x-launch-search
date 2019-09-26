import React from 'react';

function LaunchList({launchList}) {
  return (
    <div>
      {launchList.map((launch, idx) => (
        <div key={idx}>
          <div>{launch.id}: {launch.mission_name}</div>
          <div>{launch.launch_date_local}</div>
          <div>{launch.links.video_link}</div>
          <div>{launch.rocket.rocket_name}</div>
        </div>
      ))}
    </div>
  );
}

export default LaunchList
