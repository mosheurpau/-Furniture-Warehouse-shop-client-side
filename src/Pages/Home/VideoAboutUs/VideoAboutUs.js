import React from "react";
import { Container } from "react-bootstrap";

const VideoAboutUs = () => {
  return (
    <Container fluid="md" className="mt-5">
      <div>
        <h2 className="my-3">Warehouse Tour</h2>
        <h5 className="mb-5">
          Our warehouse is a key part of our business. Check out our video tour
          to see how we operate. Enjoy!
        </h5>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="embedsPage"
          className="embed-responsive-item"
          src="https://player.vimeo.com/video/137857207"
          allowfullscreen
        ></iframe>
      </div>
      <style jsx>{`
        /* Make the video full-screen */
        .embed-responsive {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
        }

        .embed-responsive .embed-responsive-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </Container>
  );
};

export default VideoAboutUs;
