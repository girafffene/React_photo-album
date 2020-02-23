import React, { useEffect, useState } from "react"
import { getAlbum, getAlbumList } from "../actions/albums"
import { Link } from "react-router-dom"
import { GoHome } from "react-icons/go"

export default props => {
  const [album, setAlbum] = useState({})
  const [photos, setPhotos] = useState([])
  const [albumList, setAlbumList] = useState([])
  useEffect(() => {
    getAlbumList().then(e => {
      console.log(e)
      setAlbumList(e)
    })
    getAlbum(props.match.params.id).then(a => {
      // console.log(a)
      setAlbum(a)
      setPhotos(a.photos)
    })
  }, [props.match.params])

  return (
    <div>
      <h1 className="albumName">
        <Link className="home" to={"/"}>
          <GoHome />
        </Link>
        {album.name}
      </h1>

      <ul className="albumNameList">
        {albumList.map(a => (
          <li key={"album" + a.id}>
            <Link to={"/album/" + a.id}>{a.name}</Link>
          </li>
        ))}
      </ul>

      <ul className="photoList">
        {photos.map(pic => (
          <li className="liAV" key={"pic" + pic.id}>
            {pic.name}
            <br />
            <br />
            <Link to={`/photo/${pic.id}`}>
              <img className="imgAV" src={pic.url} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
