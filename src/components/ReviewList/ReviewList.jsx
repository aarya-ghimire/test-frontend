import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ReviewList.css';

const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="no-reviews">
        <p>No reviews yet. Be the first to leave a review!</p>
      </div>
    );
  }

  return (
    <div className="review-list">
      <h3 className="review-list-title">Customer Reviews</h3>
      
      <div className="review-summary">
        <div className="review-average">
          <span className="review-average-number">
            {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}
          </span>
          <span className="review-average-stars">
            {'★'.repeat(Math.round(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length))}
            {'☆'.repeat(5 - Math.round(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length))}
          </span>
          <span className="review-count">Based on {reviews.length} reviews</span>
        </div>
        
        <div className="review-distribution">
          {[5, 4, 3, 2, 1].map(rating => {
            const count = reviews.filter(review => review.rating === rating).length;
            const percentage = (count / reviews.length) * 100;
            
            return (
              <div key={rating} className="review-bar">
                <span className="review-bar-label">{rating} ★</span>
                <div className="review-bar-container">
                  <div 
                    className="review-bar-fill" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="review-bar-count">{count}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="review-items">
        {reviews.map(review => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <div className="review-user">
                <LazyLoadImage
                  src={review.avatar}
                  alt={review.user}
                  effect="blur"
                  className="review-avatar"
                />
                <div>
                  <h4 className="review-username">{review.user}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <div className="review-rating">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;