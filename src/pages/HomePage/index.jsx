import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cupcakes from '../../images/cupcakes.png';
import muffins from '../../images/muffins.png';
import macarons from '../../images/macarons.png';
import tarts from '../../images/tarts.png';
import cakes from '../../images/cakes.png';
import carousel1 from '../../images/carousel1.jpeg';
import carousel2 from '../../images/carousel2.jpeg';
import carousel3 from '../../images/carousel3.jpeg';
import carousel4 from '../../images/carousel4.jpeg';
import backgroundImage from '../../images/background-image.jpg';

const carouselImages = [carousel1, carousel2, carousel3, carousel4];

export default function HomePage({handleAddToOrder}) {
  // State to store all cake items fetched from the backend
  const [allCakeItems, setAllCakeItems] = useState([]);
  // State to manage the current index for the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to control the expansion of content in the "ABOUT US" section
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  useEffect(() => {
    // Fetch all cake items from backend API
    fetch('/api/items')
      .then((response) => response.json())
      .then((data) => {
        setAllCakeItems(data);
      })
      .catch((error) => console.error('Error fetching cake items:', error));
  }, []); // Run only once when the component mounts

  // Automatically switch the carousel image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Re-run the effect when the number of images changes

  // Toggle the expansion of content in the "ABOUT US" section
  const toggleContentExpansion = () => {
    setIsContentExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <div className="relative overflow-hidden max-h-74" >
        <img
          src={carouselImages[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="w-full h-74 object-cover"
        />
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
          className="absolute top-1/2 left-4 text-4xl text-white bg-transparent border-none cursor-pointer transform -translate-y-1/2"
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % carouselImages.length)}
          className="absolute top-1/2 right-4 text-4xl text-white bg-transparent border-none cursor-pointer transform -translate-y-1/2"
        >
          &gt;
        </button>
      </div>
      <div className= "flex flex-col items-center justify-center overflow-hidden my-10">
        <h3 className="text-2xl font-bold mb-4">BROWSING OUR COLLECTIONS:</h3>
        <ul className="flex max-w-[100vw] flex-wrap justify-center">
          {[
            { image: cupcakes, category: 'Cupcakes' },
            { image: tarts, category: 'Tarts' },
            { image: cakes, category: 'Cakes' },
            { image: muffins, category: 'Muffins' },
            { image: macarons, category: 'Macarons' },
          ].map((item, index) => ( 
            // Map through each category object to generate a list of clickable items
            <div key={index} className="flex flex-col items-center m-3 transition-transform transform hover:scale-110">
              <Link to={`/shop?category=${item.category}`} className="text-black px-3 py-2 text-xl font-medium">
                <img src={item.image} alt={item.category} className="w-32 h-32 mb-2" />
                {item.category}
              </Link>
            </div>
          ))}
        </ul>
      </div>
      <div className="mb-10 bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="p-20 rounded-md bg-opacity-70 bg-gray-200">
            <h3 className="text-2xl font-bold mb-10">ABOUT US</h3>
            <p className={isContentExpanded ? '' : 'line-clamp-3'}>
              Welcome to Cakeholic, where indulgence meets artistry in the world of confectionery! 
              Nestled in the heart of the city, Cakeholic is a haven for dessert enthusiasts seeking a sweet escape. Our charming shop boasts an irresistible array of handcrafted delights, from decadent chocolate masterpieces to exquisite fruit-infused creations.
              At Cakeholic, we pride ourselves on the meticulous craftsmanship that goes into each and every delectable treat. Our skilled artisans, driven by a passion for perfection, elevate the art of baking to new heights, creating edible masterpieces that not only tantalize the taste buds but also captivate the eyes.
              As you navigate the enchanting displays, you'll find yourself surrounded by a harmonious blend of aromas, colors, and textures, igniting a sense of anticipation and delight. Whether you're celebrating a special occasion, satisfying a sweet craving, or simply seeking a moment of pure indulgence, Cakeholic is your destination for a culinary adventure that transcends the ordinary.
              Join us at Cakeholic, where each bite tells a story of dedication, creativity, and a love for the sweet symphony of flavors. Let us take you on a journey where confectionery becomes an art form, and every dessert is a masterpiece waiting to be savored.
            </p>
            <button onClick={toggleContentExpansion} className="text-black bg-white rounded font-bold transform hover:scale-110 hover:text-cadetblue py-2 px-4 mt-10 transition-all">
              {isContentExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
      </div>
        <div>
          <h3 className="text-3xl font-bold mt-20">OUR RECENT CAKES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-20 mx-20">
            {allCakeItems.slice(0, 6).map((cakeItem, index) => (
              <div key={index} className="mb-4">
                <img
                  src={cakeItem.image}
                  alt={`cake-${index}`}
                  className="w-full h-42 md:h-[17rem] lg:h-56 object-cover mb-2 sm:mb-5 rounded-md"
                />
                <div className="text-md mx-2 sm:h-6 sm:mb-5">
                  <div className="inline max-w-[80%]">
                  {cakeItem.name}
                  </div>
                </div>
                <p className="text-sm md:text-lg lg:text-xl font-bold">${cakeItem.price}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}