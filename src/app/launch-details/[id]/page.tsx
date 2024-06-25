import React from "react";
import LaunchLayout from "../../components/templates/detailpage/LaunchLayout";
import Navbar from "../../components/organisms/navbar/Navbar";
import DetailsHeading from "../../components/atoms/detailsheading/DetailsHeading";
import BackButton from "../../components/atoms/backbutton/BackButton";
import LaunchDetailCard from "../../components/molecules/launchdetailcard/LaunchDetailCard";
import LaunchDescription from "../../components/organisms/launchdescription/LaunchDescription";
import Comments from "../../components/organisms/comments/Comments";
import LaunchMedia from "../../components/organisms/launchmedia/LaunchMedia";
import CommentWrite from "../../components/organisms/commentwrite/CommentWrite";
import VideoPlayer from "../../../app/components/atoms/videoplayer/VideoPlayer";
import apolloClient from "../../../graphql/apolloClient";
import { NextPage } from "next";
import { LAUNCH_DETAILS_QUERY } from "../../../graphql/queries";
import { youtubeIdExtract } from "../../../utilities/youtubeThumbnailExtract";
import { Launch } from "@/graphql/generated/graphql";
import ErrorMessage from "@/app/components/atoms/error/ErrorMessage";
import { LaunchParams } from "@/utilities/types";

const LaunchDetails: NextPage<{
  params: LaunchParams;
}> = async ({ params }) => {
  const { id } = params;

  //!TEMPORARY DATA
  const comments = ["asd", "asd"];
  //!================

  const { data, error } = await apolloClient().query({
    query: LAUNCH_DETAILS_QUERY,
    variables: {
      launchId: id,
    },
  });

  if (error) {
    console.error("Error fetching launches data:", error);
    return <ErrorMessage errorName={error.name} errorMessage={error.message} />;
  }

  const launch: Launch = data.launch;

  let ytId: string = "";
  if (launch?.links?.video_link) {
    const id = youtubeIdExtract(launch.links.video_link);
    id && (ytId = id);
  }

  const socialMediaLinks = [
    {
      name: "space article" as const,
      link: launch?.links?.article_link ?? "",
    },
    {
      name: "wikipedia" as const,
      link: launch?.links?.wikipedia ?? "",
    },
    {
      name: "reddit" as const,
      link: launch?.links?.reddit_launch ?? "",
    },
    {
      name: "reddit media" as const,
      link: launch?.links?.reddit_media ?? "",
    },
    {
      name: "reddit campaign" as const,
      link: launch?.links?.reddit_campaign ?? "",
    },
    {
      name: "reddit recovery" as const,
      link: launch?.links?.reddit_recovery ?? "",
    },
  ];

  return (
    <>
      <Navbar navbarFor="details" />
      <LaunchLayout sectionId="preview" className="starstopBg">
        <LaunchDetailCard>
          <BackButton href="/#launches" text="back to launches" />
          {launch?.links?.video_link && (
            <VideoPlayer
              src={`https://www.youtube.com/embed/${ytId}`}
              title={`${launch?.rocket?.rocket_name} - ${launch?.mission_name}`}
            />
          )}
          {launch?.mission_name ? (
            <DetailsHeading
              title={`${launch?.rocket?.rocket_name} - ${launch?.mission_name}`}
              date_unix={launch?.launch_date_unix}
            />
          ) : (
            <DetailsHeading title="" />
          )}
        </LaunchDetailCard>
      </LaunchLayout>
      <LaunchLayout sectionId="details" className="starstopBg">
        {launch?.details && <LaunchDescription text={launch?.details} />}

        <LaunchMedia
          images={launch?.links?.flickr_images?.filter(
            (image) => image !== null
          )}
          socialMediaLinks={socialMediaLinks.filter((linkObj) => linkObj.link)}
        />
      </LaunchLayout>
      <LaunchLayout sectionId="comments" className="starsbottomBg comments">
        <h4>Comments:</h4>
        <br />
        {comments && comments.length > 0 ? (
          <Comments />
        ) : (
          <div>
            <br />
            <h5>No comments for this launch.</h5>
          </div>
        )}
        <CommentWrite />
      </LaunchLayout>
    </>
  );
};

export default LaunchDetails;
