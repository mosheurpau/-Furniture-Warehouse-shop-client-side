// import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import new1 from "../../../images/new1.jpg";
import new2 from "../../../images/new2.jpg";
import new3 from "../../../images/new3.jpg";
import new4 from "../../../images/new4.jpg";
import new5 from "../../../images/new5.jpg";
import new6 from "../../../images/new6.jpg";
import new7 from "../../../images/new7.jpg";
import new8 from "../../../images/new8.jpg";

import React from "react";
import { Container } from "react-bootstrap";

const NewArivalItems = () => {
  const newItems = [
    {
      _id: 1,
      img: new1,
      name: "SINGLE SIZE MINIMALIST BED",
      price: "499",
    },
    {
      _id: 2,
      img: new2,
      name: "King Size Minimalist Bed – Grey",
      price: "799",
    },
    {
      _id: 3,
      img: new3,
      name: "Double Industrial Lamp",
      price: "99",
    },
    {
      _id: 4,
      img: new4,
      name: "Wooden ceiling lamp",
      price: "87",
    },
    {
      _id: 5,
      img: new5,
      name: "Black light green ceiling lamp",
      price: "87",
    },
    {
      _id: 6,
      img: new6,
      name: "Single Industrial Lamp",
      price: "87",
    },
    {
      _id: 7,
      img: new7,
      name: "Full Glass Cabinet",
      price: "749",
    },
    {
      _id: 8,
      img: new8,
      name: "Wooden Kitchen Cabinet",
      price: "709",
    },
  ];
  return (
    <Container fluid="md">
      <div className="pb-28">
        <h2 className="py-5">New Arrival</h2>
        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {newItems.map((newItem) => (
              <SwiperSlide>
                <div>
                  <figure>
                    <img src={newItem.img} height={150} alt="items" />
                  </figure>
                  <div className="text-center">
                    <h5>{newItem.name}</h5>
                    <p style={{ color: "#EB7700", paddingBottom: "40px" }}>
                      $ {newItem.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default NewArivalItems;
