import {gql} from 'apollo-boost';

export const GET_LAUNCHES = gql`
  query Launch(
    $missionName: String!
    $rocketName: String!
    $launchYear: String!
  ) {
    launchesPast(
      find: {
        mission_name: $missionName
        rocket_name: $rocketName
        launch_year: $launchYear
      }
    ) {
      id
      mission_name
      launch_year
      launch_date_local
      links {
        video_link
      }
      rocket {
        rocket_name
      }
    }
    launchesUpcoming(
      find: {
        mission_name: $missionName
        rocket_name: $rocketName
        launch_year: $launchYear
      }
    ) {
      id
      mission_name
      launch_year
      launch_date_local
      rocket {
        rocket_name
      }
      links {
        video_link
      }
    }
  }
`;
