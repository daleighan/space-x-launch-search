import React from 'react';
import moment from 'moment';
import './LaunchList.css';

function LaunchList({launchList}) {
  return (
    <div className="launch-list mt">
      {launchList.length ? (
        launchList.map((launch, idx) => (
          <div key={idx} className="launch-list-item mt">
            <div className="flex-between">
              <div className="left">Mission Name</div>
              <div className="right">{launch.mission_name}</div>
            </div>
            <div className="flex-between">
              <div className="left">Launch Date</div>
              <div className="right">
                {moment(launch.launch_date_local).format('M/D/YYYY')}
              </div>
            </div>
            <div className="flex-between">
              <div className="left">Rocket Name</div>
              <div className="right">{launch.rocket.rocket_name}</div>
            </div>
            <div className="flex-between">
              <div className="left">Video Link</div>
              <div className="right">
                {launch.links.video_link ? (
                  <a href={launch.links.video_link} target="_blank">here</a>
                ) : (
                  <div>Not Yet Available</div>
                )}
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
