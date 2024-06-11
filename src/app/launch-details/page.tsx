import React from "react";
import LaunchLayout from "@/components/templates/detailpage/LaunchLayout";
import Heading from "@/components/atoms/mainheading/MainHeading";
import Navbar from "@/components/organisms/navbar/Navbar";

const LaunchDetails = () => (
  <>
    <Navbar navbarFor="details" />
    <LaunchLayout sectionId="preview" className="starstopBg">
      <Heading
        subtitle=""
        subtitle2="June 6, 2024"
        title="Starship's Fourth Flight Test"
        position="left"
      />
    </LaunchLayout>
    <LaunchLayout sectionId="details" className="moonBg">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dicta alias tempore, laborum repellat laudantium amet porro magnam
          ipsa placeat molestiae maiores repellendus nihil corporis provident
          nulla ea rerum reprehenderit. Quam iure ut est blanditiis quidem optio
          earum deleniti voluptate deserunt, minima temporibus magnam natus, in
          fugit voluptates. Alias, esse.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nam
          facere deserunt saepe quis corporis dolorem eligendi ipsam blanditiis
          enim voluptate debitis quasi necessitatibus ad quibusdam sapiente,
          magni sint explicabo. Iste, quod laborum vero harum nam cupiditate?
          Expedita quod modi, quia aperiam earum itaque ad reprehenderit odit
          voluptas harum unde libero quibusdam voluptatibus possimus cupiditate
          temporibus aliquam deleniti eius! Dolorem aperiam, dicta, neque quo
          repudiandae laudantium minus aliquam facilis odit quis eum dolor? Sint
          rerum cupiditate molestias tenetur accusantium autem tempore dolores
          fuga magnam rem laudantium, minima libero perspiciatis distinctio
          alias maxime sapiente, pariatur, doloremque modi architecto ipsa
          dolorum nesciunt?
        </p>
        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
          cupiditate, accusamus sit, voluptatem possimus ad totam ipsum
          accusantium et cumque quidem corrupti. Ducimus, explicabo eligendi.
        </p>
      </div>
    </LaunchLayout>
    <LaunchLayout sectionId="comments" className="starsbottomBg">
      <Heading subtitle="" title="" subtitle2="Comments:" position="left" />
    </LaunchLayout>
  </>
);

export default LaunchDetails;
