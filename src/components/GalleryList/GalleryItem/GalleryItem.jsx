import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem({ item }) {
    const [showDescription, setShowDescription] = useState(false);

    //Toggles between showing the image and the description
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

// Updated the like count for the item on the server
const addLike = async () => {
    try {
        await axios.put(`/gallery/like/${item.id}`);
        window.location.reload(); // Refreshes the page to update the like count
    } catch (error) {
        console.error('Error adding like:', error);
    }
};

return (
    <div className="gallery-item" onClick={toggleDescription}>
        {/* Conditionally renders the image or description */}
        {!showDescription && (
            <img className="gallery-image" src={item.path} alt={item.description} />
        )}
        {showDescription && (
            <div className="gallery-description">{item.description}</div>
        )}
        <div className="like-container">
            <button className="like-button" onClick={addLike}>
            Like
            </button>
            <span>{item.likes} likes</span>
        </div>
    </div>
 );
}

         
    export default GalleryItem;
