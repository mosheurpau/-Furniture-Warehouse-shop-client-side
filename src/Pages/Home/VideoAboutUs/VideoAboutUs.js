import React from "react";
import { Container } from "react-bootstrap";

const VideoAboutUs = () => {
  return (
    <Container fluid="md" className="mt-5">
      <div>
        <h2 className=" my-3">Warehouse Tour</h2>
        <h5 className=" mb-5">
          Our warehouse is a key part of our business. Check out our video tour
          to see how we operate. Enjoy!
        </h5>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="embedsPage"
          style={{ width: "100%", height: "600px" }}
          className="embed-responsive-item"
          src="https://player.vimeo.com/video/137857207"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
};
export default VideoAboutUs;
