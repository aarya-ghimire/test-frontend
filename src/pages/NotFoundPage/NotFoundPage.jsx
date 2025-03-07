import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              Go to Homepage
            </Link>
            <Link to="/destinations" className="btn btn-secondary">
              Browse Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;