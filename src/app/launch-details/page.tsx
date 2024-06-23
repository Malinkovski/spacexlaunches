import React from "react";
import LaunchLayout from "../components/templates/detailpage/LaunchLayout";
import Navbar from "../components/organisms/navbar/Navbar";
import DetailsHeading from "../components/atoms/detailsheading/DetailsHeading";
import img1 from "../../assets/img3.jpg";
import BackButton from "../components/atoms/backbutton/BackButton";
import LaunchDetailCard from "../components/molecules/launchdetailcard/LaunchDetailCard";
import LaunchDescription from "../components/organisms/launchdescription/LaunchDescription";
import Comments from "../components/organisms/comments/Comments";
//===================================== TEMPORARY DATA
import img2 from "../../assets/img1.jpg";
import img3 from "../../assets/img2.jpg";
import img4 from "../../assets/img3.jpg";
import img5 from "../../assets/img4.jpg";
import img6 from "../../assets/img5.jpg";
import img7 from "../../assets/img6.jpg";
import LaunchMedia from "../components/organisms/launchmedia/LaunchMedia";
import CommentWrite from "../components/organisms/commentwrite/CommentWrite";

const images: string[] = [img1, img2, img3, img4, img5, img6, img7].map(
  (img) => img.src
);
const comments = ["asd", "asd"];
//===================================== TEMPORARY DATA

const LaunchDetails = () => (
  <>
    <Navbar navbarFor="details" />
    <LaunchLayout sectionId="preview" className="starstopBg">
      <LaunchDetailCard>
        <BackButton href="/#launches" text="back to launches" />
        <div className="video" data-aos="fade-up" data-aos-duration="400" data-aos-once="true">
          <iframe
            width="1920"
            height="1080"
            src="https://www.youtube.com/embed/5nLk_Vqp7nw"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <DetailsHeading />
      </LaunchDetailCard>
    </LaunchLayout>
    <LaunchLayout sectionId="details" className="starstopBg">
      <LaunchDescription>
        <p>
          Axiom Mission 1 (or Ax-1) is a planned SpaceX Crew Dragon mission to
          the International Space Station (ISS), operated by SpaceX on behalf of
          Axiom Space. The flight will launch no earlier than 31 March 2022 and
          send four people to the ISS for an eight-day stay.
        </p>
      </LaunchDescription>
      <LaunchMedia images={images} />
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

export default LaunchDetails;
