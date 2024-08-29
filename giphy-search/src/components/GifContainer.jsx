function GifContainer({ gifList }) {
    return (
        <ul>

            {gifList.map((curGif) => {//input custom javascript conditions to be applied on the following li's which would normally be regular li's in normal html. but since we use react we are able to combine javascript with html

                //iterate through gif list // do not need to write it 3 times.


                return <li key={curGif.id}>
                    <img src={curGif.images.original.url} ></img>
                </li>
            })}

        </ul>
    )
}

export default GifContainer
