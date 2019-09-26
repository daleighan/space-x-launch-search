import React from 'react';
import './LaunchList.css';

function LaunchList({launchList}) {
  return (
    <div class="launch-list">
      {launchList.length ? (
        launchList.map((launch, idx) => (
          <div key={idx} class="launch-list-item">
            <div class="flex-between">
              <div class="left">Mission Name</div>
              <div class="right">{launch.mission_name}</div>
            </div>
            <div class="flex-between">
              <div class="left">Launch Date</div>
              <div class="right">{launch.launch_date_local}</div>
            </div>
            <div class="flex-between">
              <div class="left">Rocket Name</div>
              <div class="right">{launch.rocket_name}</div>
            </div>
            <div class="flex-between">
              <div class="left">Video Link</div>
              <div class="right"><a href={launch.video_link}>here</a></div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex-center">No Launches Matched Your Search</div>
      )}
    </div>
  );
}

export default LaunchList;
