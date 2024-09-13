import React from "react";
import "./Main.css";
import dog1 from "../../assets/images/dog1.png"
import similingwoman from "../../assets/images/smiling-woman.png";
import cat3 from "../../assets/images/cat3.png";
import cat1 from "../../assets/images/cat1.png";
import cat2 from "../../assets/images/cat2.png";
import animalsvission from "../../assets/images/cute-animals-group.png";
import dog3haircut from "../../assets/images/haircuting-dog.png";
import cutdog from "../../assets/images/cute-dogs.png";
import mendog from "../../assets/images/man-dog.png";
import closeupcat from "../../assets/images/close-up-cat.png";
import closeupdog from "../../assets/images/close-up-dog.png";
import image1 from "../../assets/images/image 1.png";
import image2 from "../../assets/images/image 2.png";
import image3 from "../../assets/images/portrait-woman.png";
import Logo from "../../assets/images/logo.png";





function Main() {
  return (
    <div className="main">
      <div className="main-page">
        <img src={dog1} alt="dog" className="dog-image" />
        <div className="desc">
          <h1>Give your pets</h1>
          <p>
            AN EVERYDAY <br></br> WAGGING TAIL <br></br> EXPERIENCE
          </p>
        </div>
        <img src={similingwoman} alt="smiling girl" className="girl-image" />
      </div>

      {/* Page Second */}

      <div className="main-page2">
        <div>
          <h2>This Is What we Do</h2>
        </div>
        <div className="main-page2-middle">
          <img src={cat3} alt="cat3 " />
          <div>
            <p>
              All pet services in one place, including grooming, shelter, and
              more
            </p>
            <button>Pet's Services</button>
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        <div className="main-page22">
          <div className="main-page22-side">
            <img src={cat1} alt="cat1 " />
            <div>
              <p>
                No Need to wory about your pet's health; we provide
                comprehensive care with veterinary and medication services
              </p>
              <button>Pet's Health</button>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          <div className="main-page22-side">
            <img src={cat2} alt="cat2 " />
            <div>
              <p>
                All the essential pet foods in one place - no need to search
                elsewhere for quality products.
              </p>
              <button>Pet's Health</button>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------- */}
      </div>

      {/* Third page Vision and mission page -------------------------------------------------------------------*/}
      <div className="main-vm">
        <img src={animalsvission} alt="vision" />
        <div>
          <h2>Our Vision</h2>
          <p>
            To be the leading destination for pet owners, offering a wide range
            of pet products, expert guidance, and a supportive network that
            promotes the well-being and happiness of pets in every home.
          </p>
        </div>

       
      </div>

      {/* Fourth page Services to help page -------------------------------------------------------------------*/}

      <h2 className="heading"> Services to help your pet feel more loved</h2>
      <div className="main-fourth-page2">
        

        
        <div className="main-fourth-page22">
          <div className="main-fourth-doghaircut">
            <img src={dog3haircut} alt="dog haircut" />
            <div className="main-fourth-service">
              <p>Pamper your pet with our top-notch grooming services</p>
              <button>Pet's Grooming</button>
            </div>
          </div>

          <div className="main-fourth-2image">
            <div className="main-fourth-service">
              <div>
                <p>A home away from home for your furry friends</p>
                <button> Pet's Shetter</button>
              </div>
              <img src={cutdog} alt="image2" />
            </div>
            <div className="main-fourth-service">
              <div>
                <p>A home away from home for your furry friends</p>
                <button> Pet's Shetter</button>
              </div>
              <img src={mendog} alt="image3" />
            </div>
          </div>
        </div>
      </div>

      {/* ------------Forth We care about your pet  */}
      <h2 className="heading">We care About Your Pet's Wellbeing</h2>
      <div className="main-fourth-page2">
    

        <div className="main-fourth-page22">
          <div className="fourth-page23">
            <img src={closeupcat} alt="cat" />
            <div>
              <p> Expert veterinary care for your beloved pets</p>
              <button>Pet's Health</button>
            </div>
          </div>

          <div className="fourth-page23">
            <img src={closeupdog} alt="cat" />
            
              <p>Reliable medication to keep your pets healthy and happy</p>
              <button>Pet's Health</button>
           
          </div>
        </div>
      </div>

      {/* ------------------- second last page--------------- */}

      <div className="main-second-lastpage">
        <div className="image-container">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
        </div>
        <div className="secondlastpage">
          <p>
            join our team of expert pet <br></br> trainers and doctors to help
            <br></br>us care for our furry friends
          </p>
          <button>Join Us</button>
        </div>
      </div>

      {/* -----------------------------Bottom------------------------------ */}

      <div className="bottomPage">
        <div className="bottomPageAboutUs">
          <h3>About Us</h3>
          <p>
            At Happy Pets, we provide all-inclusive services for your furry
            friends, from grooming and training to medical care and quality
            products. Our mission is to ensure your pets live healthy, happy,
            and well-cared-for lives.
          </p>
          <img src={Logo} alt="logo" />
        </div>

        <div className="bottomPageOurServices">
          <h3>Our Services</h3>
          <p>Pet Training</p>
          <p>Pet Shelter</p>
          <p>Pet Health</p>
          <p>Pet Essentials</p>
          <p>Pet Grooming</p>
        </div>

        <div className="bottomPageButton">
          <button>Join Us</button>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
