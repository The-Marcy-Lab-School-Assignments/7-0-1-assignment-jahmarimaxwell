import { useState, useEffect } from 'react'; // Import React and necessary hooks
import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import './index.css';
import API_KEY from './config'
import { handleFetch } from './utils';


function App() {
  // State variables to manage GIF list, errors, and search query
  const [gifList, setGifList] = useState([]); // State to store the list of GIFs
  const [error, setError] = useState(''); // State to store error messages
  const [query, setQuery] = useState(''); // State to store the current search query

  const GIF_API2 = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;
  const GIF_SEARCH_API = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`;

  // useEffect hook to fetch trending GIFs when the component mounts
  useEffect(() => {
    const fetchGifs = async () => {
      try {
        // Fetch trending GIFs from the Giphy API
        const response = await fetch(query ? GIF_SEARCH_API : GIF_API2)
        const data = await response.json(); // Parse the response as JSON
        if (data.data && data.data.length > 0) {
          setGifList(data.data); // Update state with the fetched GIFs
        }
      } catch (error) {
        setError(error); // Update state with any errors encountered during fetching
      }
    };
    fetchGifs(); // Call the function to fetch GIFs
  }, [query]); // Empty dependency array ensures this runs only once when the component mounts

  useEffect(() => {
    console.log(gifList) //randy  - console.log to check whats happening
  }, [gifList])

  //PASS setQuery IN SO GIFSEARCH CAN USE IT
  //PASS gifList IN SO GIFCONTAINER CAN USE IT
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setQuery={setQuery} />
        <br />
        <GifContainer gifList={gifList} />
      </div>
    </div>
  );
}

export default App;
