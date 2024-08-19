import NavBar from './components/NavBar';
import GifContainer from './components/GifContainer';
import GifSearch from './components/GifSearch';
import { handleFetch } from './utils';
import API_KEY from './config.js';
import { useEffect, useState } from 'react';

const api = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

const List = ({ data }) => {
  return (
    <ul>
      {
        data?.map((thing) => (
          <li key={thing.title}>
            <p>{thing.images}</p>
          </li>
        ))
      }
    </ul>
  )
}
const Form = ({handleSubmit}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="textInput">Enter Some Text </label>
      <input type="text" id="textInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

const GifFetcher = () => {
const [gif, setGif] = useState();
const [error, setError] = useState();
  
    useEffect(() => {
      const doFetch = async () => {
        const [data, error] = await handleFetch(api);
        console.log(data);
        if (data) setGif(data);
        if (error) setError(error);
      };
      doFetch();
    }, []);

    const handleClick = async () => {
      const [data, error] = await handleFetch(api);
      if (data) setGif(data.title);
      if (error) setError(error);
    }
    if (error) return <p>{error.message}</p>
  }

function App() {
  return (
    <>
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch />
        <GifFetcher />
        <br />
        <GifContainer />
        <Form />
        <List />
      </div>
    </div>
    </>
  );
}

export default App;
