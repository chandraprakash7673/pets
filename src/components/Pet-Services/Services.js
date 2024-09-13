import React from "react";
import "./Services.css"

import image1 from "../../assets/images/girl-with-dog.png";
import image2 from "../../assets/images/haircuting-dog.png";
import image3 from "../../assets/images/girl-handshake-dog.png";
import image4 from "../../assets/images/dog-in-jail.png";
import circle from "../../assets/images/circle.png"
import Footer from "../Footer/Footer"

function Services() {
  return (
    <div className="services">
      <div className="services-page1">
        <img src={image1} from alt="hugdog" />
        <div>
          <h2>Your Pet's Home Away from Home</h2>
          <p>
            Providing loving shelter, expert grooming, and professional training
            to keep your pets happy and healthy. Our dedicated team ensures your
            furry friends receive the best care, comfort, and attention.
          </p>
        </div>
      </div>
      <div className="ourservices">
        <h2>Our Services</h2>
      </div>
      {/* ----------------------page second------------------ */}

      <div className="services-page2">
        <div className="services-page22">
          <img src={image2} from alt="cuthair" />
          <img src={circle} from alt="circle" />
          <div>
            <h2>Pet Grooming</h2>
            <p>
              Our professional grooming services keep your pets looking and
              feeling their best. From luxurious baths and stylish haircuts to
              meticulous nail trimming and ear cleaning, we pamper your furry
              friends with gentle care and attention.
            </p>
            <button>Book Appointment</button>
          </div>
        </div>
        <div className="services-page22 reverse">
          <img src={image3} from alt="cuthair" />
          <img src={circle} from alt="circle" />
          <div>
            <h2>Pet Training</h2>
            <p>
              Our professional grooming services keep your pets looking and
              feeling their best. From luxurious baths and stylish haircuts to
              meticulous nail trimming and ear cleaning, we pamper your furry
              friends with gentle care and attention.
            </p>
            <button>Book Appointment</button>
          </div>
        </div>
        <div className="services-page22 low">
          <img src={image4} from alt="cuthair" />
          <img src={circle} from alt="circle" />
          <div>
            <h2>Pet Shelter</h2>
            <p>
              Our professional grooming services keep your pets looking and
              feeling their best. From luxurious baths and stylish haircuts to
              meticulous nail trimming and ear cleaning, we pamper your furry
              friends with gentle care and attention.
            </p>
            <button>Book Appointment</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;
