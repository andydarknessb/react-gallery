import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from './components/GalleryList/GalleryList';

function App() {
  const[galleryItems, setGalleryItems] = useState([]);
}

// Fetches gallery items from the server and stores them in state
const fetchGalleryItems = async () => {
  try {
    const response = await axios.get('/gallery');
    setGalleryItems(response.data);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
  }
};

// Fetches gallery items on component mount
useEffect(() => {
  fetchGalleryItems();
}, []);

return (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Gallery of My Life</h1>
    </header>
    {/* Passes gallery items to the GalleryList component */}
    <GalleryList galleryItems={galleryItems} />
  </div>
);


export default App;
