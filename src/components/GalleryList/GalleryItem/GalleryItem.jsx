import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem({ item }) {
    const [showDescription, setShowDescription] = useState(false);

    //Toggles between showing the image and the description
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

// Updated the like count for the item on the server
const handleLike = async () => {
    try {
        await axios.put(`/gallery/like/${item.id}`);
        window.location.reload(); // Refreshes the page to update the like count
    } catch (error) {
        console.error('Error updating like count:', error);
    }
};

return (
    <div className="gallery-item">
        {/* Conditionally renders the image or description */}
        {showDescription ? (
            <p onClick={toggleDescription}>{item.description}</p>
        ) : (
            <img src={item.path} alt={item.description} onClick={toggleDescription} />
        )}
        <div className="likes-section">
            <p>Likes: {item.likes}</p>
            <button onClick={handleLike}>Like</button>
         </div>
        </div>
      );
    }

    export default GalleryItem;
