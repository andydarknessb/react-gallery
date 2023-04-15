import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem'; 

function GalleryList({ galleryItems }) {
    return (
        <div className="gallery-list">
        {/* Iterates over gallery items and renders a Gallery Item component for each */ }
        {galleryItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
        ))}
        </div>
    );
    };


export default GalleryList