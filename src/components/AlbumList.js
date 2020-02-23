import React from "react"
import { useState, useEffect } from "react"
import { getAlbums } from "../actions/albums"
import { Link } from "react-router-dom"

export default props => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbums().then(data => setAlbums(data))
  }, [])

  return (
    <div className="wrapper">
      <h1 className="listHeader">My Albums</h1>
      <ul className="albumList">
        {albums.map(album => (
          <li className="liAL" key={"album" + album.id}>
            {album.name}
            <br></br>
            <Link to={"/album/" + album.id}>
              <img className="imgAL" src={album.coverPhoto} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
