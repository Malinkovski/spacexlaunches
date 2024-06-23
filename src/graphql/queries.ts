import { gql } from "@apollo/client";

export const LAUNCH_STATS_QUERY = gql`
  query GetPastLaunches {
    launches {
      id
      launch_success
    }
  }
`;