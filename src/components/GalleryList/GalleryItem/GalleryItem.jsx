import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem({ item }) {
    const [showDescription, setShowDescription] = useState(false);

    //Toggles between showing the image and the description
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };


}