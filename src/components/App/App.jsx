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


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
