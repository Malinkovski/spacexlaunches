import { gql } from "@apollo/client";

export const LAUNCH_STATS_QUERY = gql`
  query GetPastLaunches {
    launches {
      id
      launch_success
    }
  }
`;

export const ALL_LAUNCHES_QUERY = gql`
query GetAllLaunches($limit: Int, $order: String, $sort: String) {
  launches(limit: $limit, order: $order, sort: $sort) {
    id
    launch_date_utc
    links {
      flickr_images
      video_link
    }
    mission_name
    rocket {
      rocket_name
    }
    launch_date_unix
    launch_date_local
  }
}
`;
