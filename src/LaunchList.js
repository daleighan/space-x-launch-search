import React from 'react';
import moment from 'moment';
import './LaunchList.css';

function LaunchList({launchList}) {
  console.log(launchList);
  return (
    <div className="launch-list mt-2">
      {launchList.length ? (
        launchList.map((launch, idx) => (
          <div key={idx} className="launch-list-item mt-2">
            <div className="flex-between">
              <div className="left">Mission Name</div>
              <div className="right">{launch.mission_name}</div>
            </div>
            <div className="flex-between">
              <div className="left">Launch Date</div>
              <div className="right">
                {moment(launch.launch_date_local).format('MM/DD/YYYY')}
              </div>
            </div>
            <div className="flex-between">
              <div className="left">Rocket Name</div>
              <div className="right">{launch.rocket.rocket_name}</div>
            </div>
            <div className="flex-between">
              <div className="left">Video Link</div>
              <div className="right">
                <a href={launch.links.video_link}>here</a>
              </div>
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
