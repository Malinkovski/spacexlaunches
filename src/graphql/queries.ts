import { gql } from "@apollo/client";

export const LAUNCH_STATS_QUERY = gql`
  query GetLaunchStats {
    launches {
      total
    }
    landings {
      total
    }
    reflights {
      total
    }
  }
`;

export const LAUNCHES_QUERY = gql`
  query GetLaunches {
    launches {
      id
      mission_name
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
    }
  }
`;

export const LAUNCH_QUERY = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
      details
    }
  }
`;

export const ROCKET_QUERY = gql`
  query GetRocket($id: ID!) {
    rocket(id: $id) {
      id
      rocket_name
      description
      wikipedia
      flickr_images
    }
  }
`;
