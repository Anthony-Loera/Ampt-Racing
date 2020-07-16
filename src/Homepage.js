import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Body() {
  return (
    <React.Fragment>
      <div className="Motto">
        <h1 className="Motto">
          We are here for all your on and offroad racing needs call, text, or
          come see us at the shop.
        </h1>
      </div>
      <div className="Moves">
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <img className="images" alt="" src="/images/SandRail.jpg" />
          </div>
          <div>
            <img className="images" alt="" src="/images/FrontOfTruck.jpg" />
          </div>
          <div>
            <img className="images" alt="" src="/images/SandRailGarage.jpg" />
          </div>
          <div>
            <img className="images" alt="" src="/images/SandRacers.jpg" />
          </div>
          <div>
            <img className="images" alt="" src="/images/Exhaust.jpg" />
          </div>
          <div>
            <img className="images" alt="" src="/images/LatheWork.jpg" />
          </div>
          <div>
            <img className="images" alt="" src="/images/MidBuild.jpg" />
          </div>
          <div>
            <img className="images" alt="" src="/images/Welding.jpg" />
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  );
}
