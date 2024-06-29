import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/products/productsApi";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCartPlus,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/WishlistSlice";
import "./Single.scss";

const Single = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("info");

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const isLiked = product && wishlist.some((item) => item.id === product.id);

  const getRating = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar key={i} />);
    }
    if (rating % 1 >= 0.5) {
      stars.push(<FaStarHalfAlt key={"half"} />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} />);
    }
    return stars;
  };

  const handleLikeToggle = () => {
    dispatch(like(product));
  };

  const renderPriceInfo = () => {
    if (product.originalPrice) {
      const oldPrice = product.originalPrice;
      const discount = ((oldPrice - product.price) / oldPrice) * 100;

      return (
        <div className="price-info">
          <h2 className="price">${product.price.toFixed(2)}</h2>
          <p className="old-price">${oldPrice.toFixed(2)}</p>
          <h3 className="discount">{discount.toFixed(0)}% Off</h3>
        </div>
      );
    } else {
      return (
        <div className="price-info">
          <h2 className="price">${product.price.toFixed(2)}</h2>
        </div>
      );
    }
  };

  if (isLoading) {
    return (
      <div className="single-product loading container">
        <div className="product-details">
          <div className="image-container">
            <div className="product-image-wrapper skeleton"></div>
            <div className="product-thumbnails skeleton"></div>
          </div>
          <div className="overall-info">
            <h1 className="skeleton skeleton-text"></h1>
            <div className="rating-and-reviews skeleton skeleton-text"></div>
            <div className="price-info skeleton skeleton-text"></div>
            <div className="availability skeleton skeleton-text"></div>
            <div className="category skeleton skeleton-text"></div>
            <div className="shipping skeleton skeleton-text"></div>
            <div className="color-selection skeleton skeleton-text"></div>
            <div className="size-selection skeleton skeleton-text"></div>
            <div className="quantity-selection skeleton skeleton-text"></div>
            <div className="add-to-cart skeleton skeleton-text"></div>
            <div className="like-button skeleton skeleton-text"></div>
            <div className="social-share skeleton skeleton-text"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div className="error">Error loading product</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div className="single-product container">
      <div className="product-details">
        <div className="image-container">
          <div className="product-image-wrapper">
            <img
              src={selectedImage || product.image}
              alt={product.title}
              className="product-image"
            />
          </div>
          <div className="product-thumbnails">
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt={`thumbnail-${index}`}
                  className={`thumbnail ${
                    selectedImage === img ? "selected" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
          </div>
        </div>
        <div className="overall-info">
          <h1>{product.title}</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "10px",
            }}
          >
            <div className="rating">{getRating(product.rating.rate)}</div>
            <p
              style={{ fontWeight: "400", fontSize: "16px", color: "#C1C8CE" }}
            >
              0 reviews
            </p>
            <p
              style={{ fontWeight: "500", fontSize: "16px", color: "#33A0FF" }}
            >
              Submit a review
            </p>
          </div>
          {renderPriceInfo()}
          <div className="availability">Availability: In stock</div>
          <div className="category">Category: {product.category}</div>
          <div className="shipping">Free shipping</div>
          <div className="color-selection">
            <span>Select Color:</span>
            <button
              onClick={() => setSelectedColor("red")}
              className={`color-option red ${
                selectedColor === "red" ? "selected" : ""
              }`}
            />
            <button
              onClick={() => setSelectedColor("blue")}
              className={`color-option blue ${
                selectedColor === "blue" ? "selected" : ""
              }`}
            />
            <button
              onClick={() => setSelectedColor("yellow")}
              className={`color-option yellow ${
                selectedColor === "yellow" ? "selected" : ""
              }`}
            />
          </div>
          <div className="size-selection">
            <label htmlFor="size">Size:</label>
            <select id="size" name="size">
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="action-column" style={{ display: 'flex', gap: '100px' }}>
            <div className="quantity-selection">
              <button
                className="quantity-button"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className="quantity-number">{quantity}</span>
              <button
                className="quantity-button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="add-to-cart">
                <FaCartPlus style={{ marginRight: "5px" }} /> Add to Cart
              </button>
              <button
                className={`like-button ${isLiked ? "liked" : ""}`}
                onClick={handleLikeToggle}
              >
                {isLiked ? <FaHeart /> : <FaRegHeart />}{" "}
              </button>
            </div>
          </div>
          <div className="social-share">
            <button className="share-btn facebook">
              <FaFacebook style={{ marginRight: "5px" }} /> Share on Facebook
            </button>
            <button className="share-btn twitter">
              <FaTwitter style={{ marginRight: "5px" }} /> Share on Twitter
            </button>
          </div>
        </div>
      </div>
      <div className="product-tabs">
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            Product Information
          </button>
          <button
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`tab-button ${activeTab === "another" ? "active" : ""}`}
            onClick={() => setActiveTab("another")}
          >
            Another Tab
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "info" && (
            <div className="product-information">{product.description}</div>
          )}
          {activeTab === "reviews" && (
            <div className="product-reviews">No reviews yet</div>
          )}
          {activeTab === "another" && <div className="another-tab">Content for another tab</div>}
        </div>
      </div>
    </div>
  );
};

export default Single;
