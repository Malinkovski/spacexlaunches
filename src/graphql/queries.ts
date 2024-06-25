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

export const LAUNCH_DETAILS_QUERY = gql`
  query Launch($launchId: ID!) {
    launch(id: $launchId) {
      id
      details
      mission_name
      links {
        flickr_images
        video_link
        wikipedia
        reddit_launch
        reddit_media
        reddit_campaign
        article_link
      }
      launch_date_unix
      rocket {
        rocket_name
      }
    }
  }
`;
