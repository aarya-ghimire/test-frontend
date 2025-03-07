import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDestinationPage.css";

const AddDestinationPage = () => {
  const [destination, setDestination] = useState({
    name: "",
    description: "",
    category: "",
    best_time: "",
    image_url: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setDestination({ ...destination, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const payload = {
      name: destination.name.trim(),
      description: destination.description.trim(),
      category: destination.category.trim(), // Ensure it's a string
      best_time: destination.best_time.trim() || "",
      image_url: destination.image_url.trim() || "",
    };

    console.log("Submitting Destination:", payload); // Debugging log

    try {
      const response = await fetch("http://localhost:8000/api/destinations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Response Data:", data); // Debugging log

      if (!response.ok) {
        throw new Error(data.detail || "Failed to add destination");
      }

      setSuccess(true);
      setTimeout(() => navigate("/destinations"), 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="add-destination">
      <h2>Add a New Destination</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Destination added successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Destination Name"
          value={destination.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={destination.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Beach, City, Nature)"
          value={destination.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="best_time"
          placeholder="Best Time to Visit"
          value={destination.best_time}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={destination.image_url}
          onChange={handleChange}
        />
        <button type="submit">Add Destination</button>
      </form>
    </div>
  );
};

export default AddDestinationPage;
