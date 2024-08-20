function GifSearch() {

    const handleClick = async () => {
        const [data, error] = await handleFetch(api);
        if (data) setGif(data);
        if (error) setError(error);
      }

      if (error) return <p>{error.message}</p>

    return (
        <form>
            <label htmlFor="searchInput">Enter a Search Term</label>
            <input type="text" className="form-control" id="searchInput" />
            <button type="submit" className="btn btn-success" onClick={handleClick} >Search</button>
        </form>
    )
}

export default GifSearch
