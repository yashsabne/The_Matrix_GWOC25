import React, { useState } from "react";
import "../styles/productDetails.css";
import Navbar from "../includes/Navbar";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://staticm247.kalkifashion.com/media/catalog/product/p/i/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_8_.jpg?w=500"
  );

  const images = [
    "https://staticm247.kalkifashion.com/media/catalog/product/p/i/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_7_.jpg?w=500",
    "https://staticm247.kalkifashion.com/media/catalog/product/p/i/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_6_.jpg?w=500",
    "https://staticm247.kalkifashion.com/media/catalog/product/p/i/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_5_.jpg?w=500",
    "https://staticm247.kalkifashion.com/media/catalog/product/p/i/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_4_.jpg?w=500",
  ];

  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y, show: true });
  };

  const handleMouseLeave = () => {
    setZoomPosition({ ...zoomPosition, show: false });
  };

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="upper-making-center">
          <div className="upper-container">
            {/* Thumbnails */}
            <div className="images-products ">
              <div className="thumbnails">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>

              {/* Main Image with Zoom Effect */}
              <div className="main-image-container">
                <div
                  className="zoom-image"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    backgroundImage: `url(${selectedImage})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: zoomPosition.show ? "150%" : "100%",
                  }}
                ></div>
              </div>
            </div>

            <div className="product-disc">

              {/* Product Details */}
              <div class="product-details-container">
                <h2>Pink Chiffon Saree With Floral Prints And Unstitched Blouse Piece</h2>

                <p><strong>Style No:</strong> SG182291</p>
                <p>⭐⭐⭐⭐ 1 Review</p>


                <p class="price">M.R.P. ₹5,995</p>
                <p>Inclusive of all taxes</p>
                <p class="delivery-date">Est Delivery by: <strong>Friday, 14 Mar 2025</strong></p>

                <hr />




                <div class="cart-buttons">
                  <button class="add-to-cart">Add to Cart</button>
                  <button class="buy-now">Buy Now</button>
                </div>

                <p class="viewing-info">139 people are viewing this item. Don’t wait!</p>



                <h3>100% Purchase Protection</h3>
                <ul class="protection-info">
                  <li>✅ 5 days easy returns</li>
                  <li>✅ Assured Quality</li>
                  <li>✅ Free shipping*</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProductDetails;
