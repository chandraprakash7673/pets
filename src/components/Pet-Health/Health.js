import React, { useState } from "react";
import "./Health.css";
import "../Pet-Essential/Essentials.css";
import image1 from "../../assets/images/image 5.png";
import image2 from "../../assets/images/image 6.png";
import image3 from "../../assets/images/image 7.png";
import image4 from "../../assets/images/image 9.png";
import image5 from "../../assets/images/image 11.png";
import image6 from "../../assets/images/dog01.png";
import image7 from "../../assets/images/image 11.png";
import image8 from "../../assets/images/image 16.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";
import icon6 from "../../assets/images/icon6.png";
import doctor1 from "../../assets/images/doctor.png";
import doctor2 from "../../assets/images/doctor2.png";
import leftarrow from "../../assets/images/leftarrow.png";
import rightarrow from "../../assets/images/rightarrow.png"
import group2 from "../../assets/images/medicine-bottles-pills 1.png";
import dog1 from "../../assets/images/dog1.png";
import Footer from "../Footer/Footer";
// import background from "../../assets/images/background-about.png";

const services = [
  { img: icon1, categories: "Routine Checkup" },
  { img: icon2, categories: "Dental Care" },
  { img: icon3, categories: "Orthopedic Surgery" },
  { img: icon4, categories: "Hospitalization" },
  { img: icon5, categories: "Expert Consultancy" },
  { img: icon6, categories: "Cardiac Care" },
];

const pets = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
  { img: image5 },
  { img: image6 },
  { img: image7 },
  { img: image8 },
];

const products = [
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
  { img: group2, name: "John Doe", review: "Amazing great service!" },
];

function Health() {
  const [petsIndex, setPetsIndex] = useState(0);
  const [productsIndex, setProductsIndex] = useState(0);

  const handleLeftClick = (setIndex, index, length) => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  const handleRightClick = (setIndex, index, length) => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  return (
    <div className="health">
      <div className="health-firstpage">
        <img src={doctor1} alt="doctor" />
        <div className="health-para">
          <h2>No need to worry about your pet's health</h2>
          <p>we have specialized pet vets who provide expert CARE</p>
        </div>
      </div>

      {/* ---------------------pet we take care----------------------------------------------------- */}

      <h1 className="health-pettype">Pets we take care of</h1>
      <div className="pets-page">
         
        <div className="pets-container here">
          <button
            onClick={() =>
              handleLeftClick(setPetsIndex, petsIndex, pets.length)
            }
          >
            <img src={leftarrow} alt="arrow" />
          </button>
          <div className="items-wrapper first">
            {pets.slice(petsIndex, petsIndex + 5).map((pet, index) => (
              <div key={index} className="pet-card">
                <img src={pet.img} alt={pet.name} className="pet-img" />
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              handleRightClick(setPetsIndex, petsIndex, pets.length)
            }
          >
            <img src={rightarrow} alt="arrow" />
          </button>
        </div>
      </div>

      {/*  -----------------------------------Our Services----------------------------------------- */}

   
      <div>
        <h1 className="health-pettype">Our Services</h1>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.img}
                alt={service.categories}
                className="icon-img"
              />
              <p>{service.categories}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ---------------------------------------------------doctor---------------------------------- */}
      <div className="health-petpage">
        <div className="health-doctor">
          <img src={doctor2} alt="doctor2" />
          <div className="health-appointment">
            <h1>Healthy pets,</h1>
            <h1>Healthy LIves</h1>
            <p>
              Providing exceptional care with empathetic treatment. Ensuring
              your cherished pet's total health and happiness.
            </p>
            <p>
              Available 24/7, our reliable veterinary professionals are always
              ready to support your pet’s health and well-being, whenever
              needed.
            </p>
            <button>Book an Appointment Now</button>
          </div>
        </div>

        <div className="health-paws">
          <div className="health-pawstext">
            <h1>Happy, Healthy Paws</h1>
            <p>
              Equipped with modern facilities, we guarantee precise and
              efficient treatments. Whether it's a regular check-up or a
              complicated procedure, we are committed to providing the highest
              level of care, ensuring your beloved pets remain joyful and
              healthy.
            </p>
          </div>
          <img src={dog1} alt="dog" />
        </div>
        <h1 className="health-pettype">Our Top Selling Products</h1>
      </div>

      <div className="products-container">
        <button
          onClick={() =>
            handleLeftClick(setProductsIndex, productsIndex, products.length)
          }
        >
          <img src={leftarrow} alt="arrow" />
        </button>

        <div className="items-wrapper">
          {products
            .slice(productsIndex, productsIndex + 5)
            .map((product, index) => (
              <div key={index} className="review-card">
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-img"
                />
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.review}</p>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={() =>
            handleRightClick(setProductsIndex, productsIndex, products.length)
          }
        >
          <img src={rightarrow} alt="arrow" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Health;
