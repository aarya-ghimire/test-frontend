import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    if (direction === "next") {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="image-gallery">
      <div className="main-image-container" onClick={openModal}>
        <LazyLoadImage
          src={images[activeIndex]}
          alt="Destination"
          effect="blur"
          className="main-image"
        />
        <div className="image-overlay">
          <span>Click to view gallery</span>
        </div>
      </div>

      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <LazyLoadImage
              src={image}
              alt={`Thumbnail ${index + 1}`}
              effect="blur"
              height={80}
              width={120}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="gallery-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <button
              className="nav-button prev"
              onClick={() => navigateImage("prev")}
            >
              &#10094;
            </button>
            <div className="modal-image-container">
              <img
                src={images[activeIndex]}
                alt="Destination"
                className="modal-image"
              />
            </div>
            <button
              className="nav-button next"
              onClick={() => navigateImage("next")}
            >
              &#10095;
            </button>
            <div className="modal-thumbnails">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`modal-thumbnail ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    height={60}
                    width={90}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
