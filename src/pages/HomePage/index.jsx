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

const carouselImages = [carousel1, carousel2, carousel3, carousel4];

export default function HomePage() {
  const [allCakeItems, setAllCakeItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Re-run the effect when the number of images changes

  const toggleContentExpansion = () => {
    setIsContentExpanded((prevExpanded) => !prevExpanded);
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    fontSize: '70px',
    color: 'rgba(255, 255, 255, 0.7)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="carousel" style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={carouselImages[currentIndex]}
          alt={`slide-${currentIndex}`}
          style={{ width: '100%', height: 'auto', position: 'relative' }}
        />
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
          style={{ ...buttonStyle, left: '10px', transform: 'translateY(-50%)' }}
        >
          &lt;
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % carouselImages.length)}
          style={{ ...buttonStyle, right: '10px', transform: 'translateY(-50%)' }}
        >
          &gt;
        </button>
      </div>
      <ul style={{ display: 'flex' }}>
            <div>
                <img src={cupcakes} alt="cupcakes" style={{ width: '200px', height: '200px' }}></img>
                <Link to="/shop?category=Cupcakes">Shop Cupcakes</Link>
            </div>
            <div>
                <img src={tarts} alt="tarts" style={{ width: '200px', height: '200px' }}></img>
                <Link to="/shop?category=Tarts">Shop Tarts</Link>
            </div>
            <div>
                <img src={cakes} alt="cakes" style={{ width: '200px', height: '200px' }}></img>
                <Link to="/shop?category=Cakes">Shop Cakes</Link>
            </div>
            <div>
                <img src={muffins} alt="muffins" style={{ width: '200px', height: '200px' }}></img>
                <Link to="/shop?category=Muffins">Shop Muffins</Link>
            </div>
            <div>
                <img src={macarons} alt="macarons" style={{ width: '200px', height: '200px' }}></img>
                <Link to="/shop?category=Macarons">Shop Macarons</Link>
            </div>
        </ul>
      <div>
        <h3>ABOUT US</h3>
        <p>
          {isContentExpanded
            ? // Display the entire content when expanded
              `Welcome to Cakeholic, where indulgence meets artistry in the world of confectionery! Nestled in the heart of the city, Cakeholic is a haven for dessert enthusiasts seeking a sweet escape. Our charming shop boasts an irresistible array of handcrafted delights, from decadent chocolate masterpieces to exquisite fruit-infused creations.

              Step inside and be greeted by the heavenly aroma of freshly baked treats, each meticulously crafted by our skilled pastry chefs. Whether you're celebrating a special occasion or simply satisfying a sweet craving, Cakeholic offers a diverse menu catering to every palate. Indulge in our signature cakes, cupcakes, and pastries, each a testament to our commitment to quality and flavor.

              At Cakeholic, we understand the importance of aesthetics, and our cakes are not just delicious but also visually stunning. Our passion for baking is evident in every detail, from the delicate icing to the intricate decorations that adorn each masterpiece. Join us at Cakeholic, where every bite is a celebration of sweetness and artistry, and let us make your dessert dreams come true.`
            : // Display only a portion of the content with a "Read More" button
              `Welcome to Cakeholic, where indulgence meets artistry in the world of confectionery! Nestled in the heart of the city, Cakeholic is a haven for dessert enthusiasts seeking a sweet escape.`}
        </p>
        <button onClick={toggleContentExpansion}>
          {isContentExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <div>
            <h3>Our recent cakes</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {allCakeItems.slice(0, 6).map((cakeItem, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                        <img
                            src={cakeItem.image}
                            alt={`cake-${index}`}
                            style={{
                            width: '400px',
                            height: '350px',
                            marginBottom: '10px',
                            }}
                        />
                        <p>{cakeItem.name}</p>
                        <p>${cakeItem.price}</p>
                        </div>
                    ))}
                </div>
        </div>
    </div>
  );
}