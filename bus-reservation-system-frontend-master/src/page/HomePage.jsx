import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/bus_1.png";
import travel_2 from "../images/bus_2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-color">Welcome to Bus Reservation System</h1>
            <p>
              Welcome to our advanced Bus Reservation System! We are thrilled to
              provide you with a seamless and convenient way to book your bus
              journeys. With our user-friendly interface, you can effortlessly
              browse through various routes, select preferred seats, and secure
              your tickets online. Say goodbye to long queues and last-minute
              worries – our system ensures a smooth and stress-free booking
              experience. Whether it's a solo adventure or a group outing, trust
              us to simplify your travel plans and get you on the road to
              memorable experiences. Your journey begins with us.
            </p>
            <p>
              Our system offers real-time availability, secure payment options,
              and instant confirmations, guaranteeing your seat on the desired
              bus. With a dedicated support team, we're committed to making your
              travel as comfortable as your destination. Embrace the future of
              bus booking with us!
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={travel_2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={travel_1}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-color ms-5">
              Real-time Availability and Instant Confirmation
            </h1>
            <p className="ms-5">
              Incorporating real-time seat availability and instantaneous
              booking confirmations, our system revolutionizes the way you plan
              your journeys. No more uncertainties or delays – with our advanced
              technology, you can effortlessly select your preferred seats and
              receive instant confirmation, ensuring a stress-free travel
              arrangement. Embrace the convenience of streamlined booking
              processes and enjoy the peace of mind that comes with securing
              your seat in an instant. Your travel plans are now smoother and
              more convenient than ever before, thanks to our real-time
              availability and immediate confirmation features.
            </p>
            <p className="ms-5">
              Discover the ease of real-time seat availability and immediate
              booking confirmations, transforming your travel planning into a
              seamless and efficient experience.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text ms-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
